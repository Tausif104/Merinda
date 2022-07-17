import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { buildLink } from 'src/app/utils/build-link';
import { environment } from 'src/environments/environment';
import { PostCbEntity, PostCbsGQL } from 'src/generated/graphql';

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
  postsSize: number;
  page = 0;

  constructor(
    private renderer: Renderer2,
    private postsCbsGQL: PostCbsGQL
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'home');

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
  
  ngOnDestroy(): void {
      this.renderer.removeClass(document.body, 'home');
  }

  pageChange(page: number) {
  }

  buildLink(post: PostCbEntity) {
    return buildLink(post)
  }
}
