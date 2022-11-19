import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, skip, Observable, switchMap, of, delay } from 'rxjs';
import { SpinnerService } from 'src/app/service/spinner.service';
import { editorjsConfig } from 'src/app/utils/editor.config';
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
  editor: EditorJS;
  editorObserver: MutationObserver;
  isUpdate: boolean = false;
  public post: Partial<Post> = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private findOnePostGQL: FindOnePostGQL,
    private createPostGQL: CreatePostGQL,
    private updatePostGQL: UpdatePostGQL,
    private removePostGQL: RemovePostGQL,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.spinnerService.show()
    this.editor = new EditorJS(editorjsConfig)
    console.log(this.editor);
    
    this.detectEditorChanges().pipe(
      debounceTime(200),
      skip(1),
      untilDestroyed(this)
    ).subscribe(async data => {
      const outputData = await this.editor.save();
      this.editorData =  JSON.stringify(outputData, null, 2);
    });

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
          if (!this.post.content) {
            throw new Error(`Content not found`)
          }
          const outputData: OutputData = JSON.parse(this.post.content);

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
    this.editor.save().then((outputData) => {
      this.editorData =  JSON.stringify(outputData, null, 2);
    })
  }

  ngOnDestroy(): void {
    this.editorObserver.disconnect();
  }

  detectEditorChanges(): Observable <any> {
    return new Observable(observer => {
      const editorDom = document.querySelector('#editorjs');
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