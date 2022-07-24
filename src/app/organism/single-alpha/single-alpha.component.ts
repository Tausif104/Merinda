import { Component, HostListener, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { PostCbEntity, PostCbsGQL, PostCbsQuery, UsersPermissionsUserEntity } from 'src/generated/graphql';
import { switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApolloQueryResult } from '@apollo/client/core';
import { buildLink } from 'src/app/utils/build-link';
import { DOCUMENT } from '@angular/common';
import { Converter } from 'showdown';

@Component({
  selector: 'app-single-alpha',
  templateUrl: './single-alpha.component.html',
  styleUrls: ['./single-alpha.component.scss']
})
export class SingleAlphaComponent implements OnInit, OnDestroy {
  post: PostCbEntity;
  author: UsersPermissionsUserEntity;
  mostRecentPosts: PostCbEntity[] = [];
  collectionSize = 0;
  pageSize = environment.pageSize
  page = 1;
  lockScrollFetch = false;
  pageCount = Infinity;
  trendingPosts: PostCbEntity[] = [];
  private converter: Converter;

  constructor(
    private renderer: Renderer2,
    private route: ActivatedRoute,
    private router: Router,
    private postsCbsGQL: PostCbsGQL,
    @Inject(DOCUMENT) private document: Document,
    
  ) {
    this.converter = new Converter();
  }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'single');
    
    this.mostRecentByParams();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.mostRecentByParams()
      }
    });

    this.route.params.subscribe(params => {
       const slug = params['slug'];
       this.postsCbsGQL.fetch({
        slug,
        locale: "en",
        pageSize: 1,
        page: 0
       }).subscribe((response) => {
          const posts = response.data.postCbs?.data as PostCbEntity[];

          if (posts?.length) {
            this.post = posts[0];
            this.author = this.post.attributes?.user?.data as UsersPermissionsUserEntity
          } else {
            this.router.navigate(['/']);
          }
       })
    });

    // Trending Posts
    this.postsCbsGQL.fetch({
      page: 0,
      locale: "en",
      pageSize: environment.pageSize,
      sectionId: "2",
    }).subscribe((response) => {
      this.trendingPosts = response.data.postCbs?.data as PostCbEntity[];
    });
  }

  ngOnDestroy(): void {
      this.renderer.removeClass(this.document.body, 'single');
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
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const verticalOffset = window.pageYOffset 
          || this.document.documentElement.scrollTop 
          || this.document.body.scrollTop || 0;
    const totalScroll = this.document.documentElement.scrollHeight;

    const completed = (verticalOffset + window.innerHeight) >  totalScroll - (totalScroll * 0.3);
    
    if (completed && !this.lockScrollFetch) {
      this.lockScrollFetch = true;
      
      this.router.navigate(['post', this.post.attributes?.Slug], {
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
  

  setMostRecent(response: ApolloQueryResult<PostCbsQuery>) {
    this.mostRecentPosts = this.mostRecentPosts.concat(response.data.postCbs?.data as PostCbEntity[]);
    this.collectionSize = response.data.postCbs?.meta.pagination.total as number;
    this.pageCount = response.data.postCbs?.meta.pagination.pageCount as number;
  }

  buildLink(post: PostCbEntity) {
    return buildLink(post)
  }

  markDownToHTML(markdown: string) {
    return this.converter.makeHtml(markdown);
  }
}
