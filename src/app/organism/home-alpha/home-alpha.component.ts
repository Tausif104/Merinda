import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import { switchMap } from 'rxjs';
import { buildLink } from 'src/app/utils/build-link';
import { whenPageScrolled } from 'src/app/utils/scroll';
import { environment } from 'src/environments/environment';
import { PostCbEntity, PostCbsGQL, PostCbsQuery } from 'src/generated/graphql';

@Component({
  selector: 'app-home-alpha',
  templateUrl: './home-alpha.component.html',
  styleUrls: ['./home-alpha.component.scss'],
})
export class HomeAlphaComponent implements OnInit, OnDestroy {
  editorsPickPosts: PostCbEntity[] = [];
  trendingPosts: PostCbEntity[] = [];
  popularPosts: PostCbEntity[] = [];
  heroPost: PostCbEntity;
  referralPosts: PostCbEntity[] = [];
  mostRecentPosts: PostCbEntity[] = [];
  collectionSize = 0;
  pageSize = environment.pageSize
  page = 1;
  lockScrollFetch = false;
  pageCount = Infinity;

  constructor(
    private renderer: Renderer2,
    private postsCbsGQL: PostCbsGQL,
    private router: Router,
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document
  ) {}

  getPageParam() {
    return 
  }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'home');
    
    this.mostRecentByParams();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.mostRecentByParams()
      }
    });

    // Editor's Pick Posts
    this.postsCbsGQL.fetch({
      page: 0,
      locale: "en",
      pageSize: environment.pageSize,
      sectionId: "1",
    }).subscribe((response) => {
      this.editorsPickPosts = response.data.postCbs?.data as PostCbEntity[];
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

    // Popular Posts
    this.postsCbsGQL.fetch({
      page: 0,
      locale: "en",
      pageSize: environment.pageSize,
      sectionId: "3",
    }).subscribe((response) => {
      this.popularPosts = response.data.postCbs?.data as PostCbEntity[]      
    });

    // Hero Post
    this.postsCbsGQL.fetch({
      page: 0,
      locale: "en",
      pageSize: 1,
      sectionId: "4",
    }).subscribe((response) => {
      const posts = response.data.postCbs?.data as PostCbEntity[];

      if (posts.length) {
        this.heroPost = posts[0]
      }   
    });

    // Posts with Referral
    this.postsCbsGQL.fetch({
      page: 0,
      locale: "en",
      pageSize: environment.pageSize,
      sectionId: "6",
    }).subscribe((response) => {
      this.referralPosts = response.data.postCbs?.data as PostCbEntity[]      
    });
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

  setMostRecent(response: ApolloQueryResult<PostCbsQuery>) {
    this.mostRecentPosts = this.mostRecentPosts.concat(response.data.postCbs?.data as PostCbEntity[]);
    this.collectionSize = response.data.postCbs?.meta.pagination.total as number;
    this.pageCount = response.data.postCbs?.meta.pagination.pageCount as number;
  }
  
  ngOnDestroy(): void {
      this.renderer.removeClass(this.document.body, 'home');
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const isScrolled = whenPageScrolled(this.document)

    if (isScrolled && !this.lockScrollFetch) {
      this.lockScrollFetch = true;
      
      this.router.navigate(['../'], {
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

  buildLink(post: PostCbEntity) {
    return buildLink(post)
  }
}
