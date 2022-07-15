import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostCbEntity, PostCbsGQL, UsersPermissionsUserEntity } from 'src/generated/graphql';

@Component({
  selector: 'app-single-alpha',
  templateUrl: './single-alpha.component.html',
  styleUrls: ['./single-alpha.component.scss']
})
export class SingleAlphaComponent implements OnInit, OnDestroy {
  post: PostCbEntity;
  author: UsersPermissionsUserEntity;

  constructor(
    private renderer: Renderer2,
    private route: ActivatedRoute,
    private postCbsGQL: PostCbsGQL,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'single');
    this.route.params.subscribe(params => {
       const slug = params['slug'];
       this.postCbsGQL.fetch({
        slug,
        locale: "en",
        pageSize: 1,
        page: 0
       }).subscribe((response) => {
          const posts = response.data.postCbs?.data as PostCbEntity[];

          if(posts?.length) {
            this.post = posts[0];
            console.log(this.post);
            this.author = this.post.attributes?.user?.data as UsersPermissionsUserEntity
          } else {
            this.router.navigate(['/']);
          }
       })
    });
  }

  ngOnDestroy(): void {
      this.renderer.removeClass(document.body, 'single');
  }

}
