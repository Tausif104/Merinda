import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { buildLink } from 'src/app/utils/build-link';
import { environment } from 'src/environments/environment';
import { AuthorGQL, PostCbEntity, PostCbsGQL, PostCbsQuery, UsersPermissionsUserEntity } from 'src/generated/graphql';
import { switchMap } from 'rxjs';
import { ApolloQueryResult } from '@apollo/client/core';
import { whenPageScrolled } from 'src/app/utils/scroll';

@Component({
  selector: 'app-author-alpha',
  templateUrl: './author-alpha.component.html',
  styleUrls: ['./author-alpha.component.scss']
})
export class AuthorAlphaComponent implements OnInit, OnDestroy {
  mostRecentPosts: PostCbEntity[] = [];
  page = 0;
  postsSize = 0;
  author: UsersPermissionsUserEntity;
  hightlightPosts: PostCbEntity[] = [];
  pageSize = environment.pageSize;
  collectionSize = 0;
  lockScrollFetch = false;
  pageCount = Infinity;
  slug: string;

  constructor(
    private renderer: Renderer2,
    private postsCbsGQL: PostCbsGQL,
    private route: ActivatedRoute,
    private authorGQL: AuthorGQL,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'archive');
    this.route.params.subscribe(params => {
        this.slug = params['slug'];
        const userSlug = this.slug.split("_");

        const firstname = userSlug[0];
        const lastname = userSlug[1];

        this.authorGQL.fetch({
          firstname,
          lastname
        }).subscribe((response) => {
          this.author = response.data.usersPermissionsUsers?.data[0] as UsersPermissionsUserEntity;
          if (!this.author.id) {
            return this.router.navigate(['/']);
          }

          this.hightlight();

          return this.mostRecentByParams();
        });
    });
  }

  hightlight() {
    this.postsCbsGQL.fetch({
      userId: this.author.id,
      sectionId: '6',
      locale: 'en',
      page: 0,
      pageSize: 5,
    }).subscribe((response) => {
      this.hightlightPosts = response.data.postCbs?.data as PostCbEntity[];
    })
  }

  mostRecentByParams() {
    this.route.queryParams.pipe(
      switchMap((params) => {
        this.page = Number.parseInt(params['page']) || this.page;
        return this.fetchMostrecent();
      })
    ).subscribe((response) => {
      this.setMostRecent(response);
    });
  }

  fetchMostrecent() {
    return this.postsCbsGQL.fetch({
      locale: 'en',
      page: this.page,
      pageSize: environment.pageSize,
      userId: this.author.id,
    });
  }

  setMostRecent(response: ApolloQueryResult<PostCbsQuery>) {
    this.mostRecentPosts = this.mostRecentPosts.concat(response.data.postCbs?.data as PostCbEntity[]);
    this.collectionSize = response.data.postCbs?.meta.pagination.total as number;
    this.pageCount = response.data.postCbs?.meta.pagination.pageCount as number;
  }

  ngOnDestroy(): void {
      this.renderer.removeClass(this.document.body, 'archive');
  }

  buildLink(post: PostCbEntity) {
    return buildLink(post)
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const isScrolled = whenPageScrolled(this.document)

    if (isScrolled && !this.lockScrollFetch) {
      this.lockScrollFetch = true;
      
      this.router.navigate(['author', this.slug], {
        queryParams: {
          page: this.page + 1
        }
      });

      setTimeout(() => {
        if (this.page < this.pageCount) {
          this.lockScrollFetch = false
        }
      }, 1500);
    }
  }

}
