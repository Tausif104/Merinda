import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { PostCbEntity, PostCbsBySectionGQL } from 'src/generated/graphql';

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

  constructor(
    private renderer: Renderer2,
    private postsCbsBySection: PostCbsBySectionGQL
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'home');

    // Editor's Pick Posts
    this.postsCbsBySection.fetch({
      id: "1",
      locale: "en"
    }).subscribe((response) => {
      this.editorsPickPosts = response.data.sectionsCb?.data?.attributes?.post_cbs?.data as PostCbEntity[]

      console.log(this.editorsPickPosts);
      
    });

    // Trending Posts
    this.postsCbsBySection.fetch({
      id: "2",
      locale: "en"
    }).subscribe((response) => {
      this.trendingPosts = response.data.sectionsCb?.data?.attributes?.post_cbs?.data as PostCbEntity[]
    });

    // Popular Posts
    this.postsCbsBySection.fetch({
      id: "3",
      locale: "en"
    }).subscribe((response) => {
      this.popularPosts = response.data.sectionsCb?.data?.attributes?.post_cbs?.data as PostCbEntity[]
    });

    // Hero Post
    this.postsCbsBySection.fetch({
      id: "4",
      locale: "en"
    }).subscribe((response) => {
      const posts = response.data.sectionsCb?.data?.attributes?.post_cbs?.data as PostCbEntity[];

      console.log({posts});
      
      if (posts.length) {
        this.heroPost = posts[0]
      }
    });

    // Posts with Referral
    this.postsCbsBySection.fetch({
      id: "6",
      locale: "en"
    }).subscribe((response) => {
      this.referralPosts = (response.data.sectionsCb?.data?.attributes?.post_cbs?.data as PostCbEntity[]);
    });
  }
  
  ngOnDestroy(): void {
      this.renderer.removeClass(document.body, 'home');
  }
}
