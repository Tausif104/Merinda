import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { buildLink } from 'src/app/utils/build-link';
import { environment } from 'src/environments/environment';
import { CategoryCbEntity, CategoryCbGQL, PostCbEntity } from 'src/generated/graphql';

@Component({
  selector: 'app-category-alpha',
  templateUrl: './category-alpha.component.html',
  styleUrls: ['./category-alpha.component.scss']
})
export class CategoryAlphaComponent implements OnInit, OnDestroy {
  posts: PostCbEntity[] = [];
  postsSize: number;
  category: CategoryCbEntity;
  popularInCulturePosts: PostCbEntity[];
  page: number;
  categoryId: string;

  constructor(
    private renderer: Renderer2,
    private categoryCb: CategoryCbGQL,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'archive');
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      if(slug === 'politic') {
        this.categoryId = "1"
      } else if (slug === 'publication') {
        this.categoryId = "2"
      } else if (slug === 'health') {
        this.categoryId = "3"
      }
    })
    this.categoryCb.fetch({
      categoryId: this.categoryId,
      locale: "en",
      page: this.page,
      pageSize: environment.pageSize
    }).subscribe((response) => {
      if(response.data.categoryCb?.data) {
        this.category = response.data.categoryCb.data as CategoryCbEntity
        this.posts = response.data.postCbs?.data as PostCbEntity[];
        this.postsSize = response.data.postCbs?.meta.pagination.total || 0;
      }
    });
  }

  ngOnDestroy(): void {
      this.renderer.removeClass(document.body, 'archive');
  }

  pageChange(page: number) {}

  buildLink(post: PostCbEntity) {
    return buildLink(post)
  }
}
