import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, skip, Observable, delay } from 'rxjs';
import { FileService } from 'src/app/service/file.service';
import { SpinnerService } from 'src/app/service/spinner.service';
import { CreatePostGQL, CreatePostVersionGQL, FindOnePostGQL, FindPostVersionGQL, Meta, Post, PostVersion, RemovePostGQL, UpdatePostGQL } from 'src/generated/graphql';
import * as moment from 'moment';
import { differenceWith, isEqual } from 'lodash';
import slugify from 'slugify';

@UntilDestroy()
@Component({
  selector: 'app-post-alpha',
  templateUrl: './post-alpha.component.html',
  styleUrls: ['./post-alpha.component.scss']
})
export class PostAlphaComponent implements OnInit {

  id: string | null;
  code = ''
  editorData: any;
  editor: any;
  editorObserver: MutationObserver;
  isUpdate: boolean = false;
  isBrowser: boolean = false;
  public post: Partial<Post> = {};
  public meta: Partial<Meta> = {};
  editorDataHistory: any = [];
  metaGalleryStatus = false;
  public postVersions: PostVersion[];
  selectedPostVersion: PostVersion;
  showConvertButton = false;

  hasSchedule = false;
  schedule: Date | null;
  showPostVersionConfirm = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private findOnePostGQL: FindOnePostGQL,
    private createPostGQL: CreatePostGQL,
    private updatePostGQL: UpdatePostGQL,
    private removePostGQL: RemovePostGQL,
    private spinnerService: SpinnerService,
    private fileService: FileService,
    @Inject(PLATFORM_ID) private platformId: string,
    @Inject(DOCUMENT) private document: Document,
    private createPostVersionGQL: CreatePostVersionGQL,
    private findPostVersionGQL: FindPostVersionGQL,
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  async buildEditor() {
    const EditorJS = require('@editorjs/editorjs');
    const { editorjsConfig } = require('src/app/utils/editor.config');
    this.editor = new EditorJS(editorjsConfig(this.fileService));
    await this.editor.isReady
    const DragDrop = require('editorjs-drag-drop');
    new DragDrop(this.editor);

    this.editorOnValueChanges().pipe(
      debounceTime(500),
      skip(1),
      untilDestroyed(this)
    ).subscribe(async data => {
      const outputData = await this.editor.save();
      this.editorData = JSON.stringify(outputData, null, 2);
    });
  }

  fetchPost() {
    if (this.id) {
      this.findOnePostGQL.fetch({
        findOnePostInput: this.id
      })
        .subscribe(async (response) => {
          this.post = { ...response.data.findOnePostById as Post };
          this.meta = { ...response.data.findOnePostById.meta as Meta };
          this.hasSchedule = !!this.post.schedule;
          if (this.post.schedule) {
            this.schedule = moment.unix(this.post.schedule).toDate();
          } else {
            this.schedule = null;
          }

          console.log(this.post);

          if (!this.post.raw) {
            throw new Error(`Content not found`)
          }
          this.editorData = this.post.raw;
          const outputData: any = JSON.parse(this.post.raw);

          // Render editor
          await new Promise<void>((resolve, reject) => {
            const timeout = setTimeout(() => {
              clearInterval(interval);
              reject();
            }, 5000);

            const interval = setInterval(() => {
              if (this.editor.render) {
                clearInterval(interval);
                clearTimeout(timeout);
                setTimeout(() => {
                  resolve();
                }, 1000)
              }
            }, 100);
          });

          this.editor.render(outputData);
          this.spinnerService.hide();
        });
    }
  }

  postParamListener() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');

      if (this.id) {
        this.isUpdate = true;
        this.fetchPost();
      } else {
        setTimeout(() => {
          this.spinnerService.hide();
        }, 4000);
      }
    });
  }

  async ngOnInit() {
    // Always redirect first tab
    if (!window.location.pathname.includes('content')) {
      await this.router.navigate([window.location.pathname], {
        queryParams: {
          tab: 'content'
        }
      });
    }

    this.spinnerService.show();
    if (this.isBrowser) {
      this.buildEditor();
    }

    this.postParamListener();
    this.createPostVersionListener();
    this.fetchPostVersions();
  }

  fetchPostVersions() {
    this.findPostVersionGQL.fetch({
      findPostVersionInput: {
        take: 5
      },
    }).subscribe((response) => {
      this.postVersions = response.data.findPostVersion as PostVersion[];
    });
  }

  createPostVersion() {
    console.log(this.editorData);
    if (!this.id) {
      throw new Error('Cannot create version. Post not exist.');
    }

    this.createPostVersionGQL.mutate({
      createPostVersionInput: {
        postId: this.id,
        raw: this.editorData,
      }
    }).subscribe(() => {
      this.fetchPostVersions();
    });
  }

  createPostVersionListener() {
    let oldValue = JSON.parse(this.editorData || '{"blocks": []}').blocks;
    this.editorOnValueChanges().pipe(
      debounceTime(500),
      skip(1),
      untilDestroyed(this)
    ).subscribe(() => {
      const parsedEditorData = JSON.parse(this.editorData)
      if (!(differenceWith(oldValue, parsedEditorData.blocks, isEqual))) {
        oldValue = parsedEditorData.blocks
        this.createPostVersion();
      }
    });
  }

  update() {
    if (!this.post.id) {
      throw new Error('Cannot update post not exist.');
    }

    this.spinnerService.show();
    let schedule = null;
    if (this.hasSchedule) {
      schedule = moment(this.schedule).utc().unix()
    }

    this.updatePostGQL.mutate({
      updatePostInput: {
        id: this.post.id,
        title: this.post.title || "",
        content: this.editorData,
        meta: {
          description: this.meta.description || '',
          image: this.meta.image || '',
          title: this.meta.title || '',
          url: this.meta.url || '',
        },
        schedule,
        status: this.post.status || false
      }
    }).subscribe((response) => {
      this.fetchPost();
      this.createPostVersion();
    });
  }

  create() {
    this.spinnerService.show();
    let schedule;
    if (this.hasSchedule) {
      schedule = moment(this.schedule).utc().unix()
    }

    this.createPostGQL.mutate({
      createPostInput: {
        content: this.editorData,
        title: this.post.title || '',
        meta: {
          description: this.meta.description || '',
          image: this.meta.image || '',
          title: this.meta.title || '',
          url: this.meta.url || '',
        },
        schedule,
      }
    }).subscribe((response) => {
      this.router.navigate([`/admin/posts/${response.data?.createPost.id}`]);
      this.spinnerService.hide();
    });
  }

  remove() {
    if (!this.post.id) {
      throw new Error(`Cannot remove. Post not exist.`);
    }

    this.spinnerService.show();
    this.removePostGQL.mutate({
      removePostInput: this.post.id
    }).subscribe((response) => {
      this.router.navigate(['/posts']);
      this.spinnerService.hide();
    })
  }

  saveEditorData(): void {
    this.editor.save().then((outputData: any) => {
      this.editorData = JSON.stringify(outputData, null, 2);
    })
  }

  ngOnDestroy(): void {
    this.editorObserver && this.editorObserver.disconnect();
  }

  editorOnValueChanges(): Observable<any> {
    return new Observable(observer => {
      const editorDom = this.document.querySelector('#editorjs');
      if (!editorDom) {
        throw new Error("Test");
      }

      const config = { attributes: true, childList: true, subtree: true };

      this.editorObserver = new MutationObserver((mutation) => {
        observer.next(mutation);
      })

      this.editorObserver.observe(editorDom, config);
    });
  }

  onTitleChange(value: string) {
    this.meta.title = 'Dailypartner | ' + value;
    this.meta.url = slugify(value).toLowerCase();
  }

  calendarOnValueChange(value: Date) {
    console.log(`Current value: ${value}`);
    this.schedule = value
  }

  getDistance() {
    return moment(this.schedule).fromNow();
  }

  imageOnselect(image: string) {
    console.log(image);
    this.meta.image = image;
    this.metaGalleryStatus = false;
  }

  postVersionOnChange(postVersion: PostVersion) {
    console.log(postVersion);
    // this.showPostVersionConfirm = true;
    this.showConvertButton = true
  }

  fromNow(date: string) {
    return moment(date).format("ddd, h:mm:ss a") + " " + moment(date).fromNow();
  }

  postVersionConfirmOnCancel() {
    this.showPostVersionConfirm = false;
  }

  postVersionConfirmOnOk() {
    this.showPostVersionConfirm = false;
    this.editorData = this.selectedPostVersion.raw;
    this.update();
  }
}