import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthorGQL, PostCbEntity, PostCbsGQL, UsersPermissionsUserEntity } from 'src/generated/graphql';

@Component({
  selector: 'app-author-alpha',
  templateUrl: './author-alpha.component.html',
  styleUrls: ['./author-alpha.component.scss']
})
export class AuthorAlphaComponent implements OnInit, OnDestroy {
  posts: PostCbEntity[] = [];
  author: UsersPermissionsUserEntity;

  constructor(
    private renderer: Renderer2,
    private postCbsGQL: PostCbsGQL,
    private route: ActivatedRoute,
    private authorGQL: AuthorGQL,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'archive');
    this.route.params.subscribe(params => {
        const slug = params['slug'];
        const userSlug = slug.split("_");

        const firstname = userSlug[0];
        const lastname = userSlug[1];

        console.log({firstname, lastname});
        
        this.authorGQL.fetch({
          firstname,
          lastname
        }).subscribe((response) => {
          console.log(response.data.usersPermissionsUsers?.data);
          
          this.author = response.data.usersPermissionsUsers?.data[0] as UsersPermissionsUserEntity;
          if (!this.author.id) {
            return this.router.navigate(['/']);
          }

          return this.postCbsGQL.fetch({
            page: 0,
            locale: "en",
            pageSize: environment.pageSize,
            userId: this.author.id
          }).subscribe((response) => {
            this.posts = response.data.postCbs?.data as PostCbEntity[]
          });
        })

    });
  }

  ngOnDestroy(): void {
      this.renderer.removeClass(document.body, 'archive');
  }

}
