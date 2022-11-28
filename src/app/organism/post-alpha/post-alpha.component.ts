import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, skip, Observable, delay } from 'rxjs';
import { FileService } from 'src/app/service/file.service';
import { SpinnerService } from 'src/app/service/spinner.service';
import { CreatePostGQL, FindOnePostGQL, Meta, Post, RemovePostGQL, UpdatePostGQL } from 'src/generated/graphql';

@UntilDestroy()
@Component({
  selector: 'app-post-alpha',
  templateUrl: './post-alpha.component.html',
  styleUrls: ['./post-alpha.component.scss']
})
export class PostAlphaComponent implements OnInit {

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
    @Inject(DOCUMENT) private document: Document
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }


  @HostListener('window:keydown',['$event'])
  onKeyPress($event: KeyboardEvent) {
      const undoCondition = ($event.ctrlKey || $event.metaKey) && $event.keyCode == 90
      if (undoCondition) {
        console.log('CTRL + Z');
      }

      if(($event.ctrlKey || $event.metaKey) && $event.keyCode == 89) {
        console.log('CTRL +  Y');
      }
  }

  async ngOnInit() {
    console.log(this.router);
    
    if (!window.location.pathname.includes('content')) {
      await this.router.navigate([window.location.pathname], {
        queryParams: {
          tab: 'content'
        }
      });
    }

    this.spinnerService.show();
    if (this.isBrowser) {
      const EditorJS = require('@editorjs/editorjs');
      const { editorjsConfig } = require('src/app/utils/editor.config');
      this.editor = new EditorJS(editorjsConfig(this.fileService));
      await this.editor.isReady
      const DragDrop = require('editorjs-drag-drop');
      // const Undo = require('editorjs-undo');
      // new Undo({editor: this.editor});
      new DragDrop(this.editor);
      
      this.detectEditorChanges().pipe(
        debounceTime(500),
        skip(1),
        untilDestroyed(this)
      ).subscribe(async data => {
        const outputData = await this.editor.save();
        this.editorData =  JSON.stringify(outputData, null, 2);
      });
    }

    this.route.paramMap.subscribe((params) => {
      const postId = params.get('id');

      if (postId) {
        this.isUpdate = true;
        this.findOnePostGQL.fetch({
          findOnePostInput: Number(postId)
        }).pipe(
          delay(2000)
        ).subscribe((response) => {
          this.post = {...response.data.findOnePostById as Post};
          this.meta = { ...response.data.findOnePostById.meta as Meta};
          
          if (!this.post.raw) {
            throw new Error(`Content not found`)
          }
          const outputData: any = JSON.parse(this.post.raw);

          this.editor.render(outputData);
          this.spinnerService.hide();
        });
      } else {
        setTimeout(() => {
          this.spinnerService.hide();
        }, 4000);
      }
    })
  }

  update() {
    this.spinnerService.show();
    this.updatePostGQL.mutate({
      updatePostInput: {
        id: Number(this.post.id),
        title: this.post.title || "",
        content: this.editorData,
        meta: {
          description: this.meta.description || '',
          image: this.meta.image || '',
          title: this.meta.title || '',
          url: this.meta.url || '',
        }
      }
    }).subscribe((response) => {
      this.spinnerService.hide();
    })
  }

  create() {
    this.spinnerService.show();
    this.createPostGQL.mutate({
      createPostInput: {
        content: this.editorData,
        title: this.post.title || '',
        meta: {
          description: this.meta.description || '',
          image: this.meta.image || '',
          title: this.meta.title || '',
          url: this.meta.url || '',
        }
      }
    }).subscribe((response) => {
      this.router.navigate([`/admin/posts/${response.data?.createPost.id}`]);
      this.spinnerService.hide();
    })
  }

  remove() {
    this.spinnerService.show();
    this.removePostGQL.mutate({
      removePostInput: Number(this.post.id)
    }).subscribe((response) => {
      this.router.navigate(['/posts']);
      this.spinnerService.hide();
    })
  }

  saveEditorData() : void {
    this.editor.save().then((outputData: any) => {
      this.editorData =  JSON.stringify(outputData, null, 2);
    })
  }

  ngOnDestroy(): void {
    this.editorObserver && this.editorObserver.disconnect();
  }

  detectEditorChanges(): Observable <any> {
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

  getMetaTitle() {
    if (!this.meta.title) {
      return 'Dailypartner | ' + this.post.title;
    }

    return this.meta.title;
  }
}