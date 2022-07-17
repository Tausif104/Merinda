import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { buildLink } from 'src/app/utils/build-link';
import { environment } from 'src/environments/environment';
import { CategoryCbEntity, CategoryCbGQL, PostCbEntity } from 'src/generated/graphql';

@Component({
  selector: 'app-category-alpha',
  templateUrl: './category-alpha.component.html',
  styleUrls: ['./category-alpha.component.scss']
})
export class CategoryAlphaComponent implements OnInit, OnDestroy {
  posts: PostCbEntity[];
  postsSize: number;
  category: CategoryCbEntity;
  popularInCulturePosts: PostCbEntity[];
  page: number;

  constructor(
    private renderer: Renderer2,
    private categoryCb: CategoryCbGQL
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'archive');
    
    // this.categoryCb.fetch({
    //   id: "2",
    //   locale: "en",
    //   page: this.page,
    //   pageSize: environment.pageSize
    // }).subscribe((response) => {
    //   if(response.data.categoryCb?.data) {
    //     this.category = response.data.categoryCb.data as CategoryCbEntity
    //   }
    // });
  }

  ngOnDestroy(): void {
      this.renderer.removeClass(document.body, 'archive');
  }

  pageChange(page: number) {}

  buildLink(post: PostCbEntity) {
    return buildLink(post)
  }
}
