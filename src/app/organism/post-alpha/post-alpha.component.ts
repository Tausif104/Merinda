import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import type EditorJS from '@editorjs/editorjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, skip, Observable, delay } from 'rxjs';
import { SpinnerService } from 'src/app/service/spinner.service';
import { CreatePostGQL, FindOnePostGQL, Post, RemovePostGQL, UpdatePostGQL } from 'src/generated/graphql';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private findOnePostGQL: FindOnePostGQL,
    private createPostGQL: CreatePostGQL,
    private updatePostGQL: UpdatePostGQL,
    private removePostGQL: RemovePostGQL,
    private spinnerService: SpinnerService,
    @Inject(PLATFORM_ID) private platformId: string,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.spinnerService.show()
    if (this.isBrowser) {
      const EditorJS = require('@editorjs/editorjs');
      const { editorjsConfig } = require('src/app/utils/editor.config');
      this.editor = new EditorJS(editorjsConfig);
      this.detectEditorChanges().pipe(
        debounceTime(200),
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
          if (!this.post.contentRaw) {
            throw new Error(`Content not found`)
          }
          const outputData: any = JSON.parse(this.post.contentRaw);

          this.editor.render(outputData);
          this.spinnerService.hide();
        });
      } else {
        this.spinnerService.hide();
      }
    })
  }

  update() {
    this.spinnerService.show();
    this.updatePostGQL.mutate({
      updatePostInput: {
        id: Number(this.post.id),
        title: this.post.title || "",
        content: this.editorData
      }
    }).subscribe((response) => {
      console.log({response});
      this.spinnerService.hide();
    })
  }

  create() {
    this.spinnerService.show();
    this.createPostGQL.mutate({
      createPostInput: {
        content: this.editorData,
        title: this.post.title || ''
      }
    }).subscribe((response) => {
      this.router.navigate([`/posts/${response.data?.createPost.id}`])
      console.log({response});
      this.spinnerService.hide();
    })
  }

  remove() {
    this.spinnerService.show();
    this.removePostGQL.mutate({
      removePostInput: Number(this.post.id)
    }).subscribe((response) => {
      console.log({response});
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
    this.editorObserver.disconnect();
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
}