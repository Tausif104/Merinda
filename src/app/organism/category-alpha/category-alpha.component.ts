import { Component, HostListener, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import { buildLink } from 'src/app/utils/build-link';
import { environment } from 'src/environments/environment';
import { CategoryCbEntity, CategoryCbGQL, CategoryCbsGQL, PostCbEntity, PostCbsGQL, PostCbsQuery } from 'src/generated/graphql';
import { switchMap } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { whenPageScrolled } from 'src/app/utils/scroll';

@Component({
  selector: 'app-category-alpha',
  templateUrl: './category-alpha.component.html',
  styleUrls: ['./category-alpha.component.scss']
})
export class CategoryAlphaComponent implements OnInit, OnDestroy {
  mostRecentPosts: PostCbEntity[] = [];
  postsSize: number;
  category: CategoryCbEntity;
  popularInCulturePosts: PostCbEntity[];
  page = 0;
  pageSize = environment.pageSize;
  collectionSize = 0;
  lockScrollFetch = false;
  pageCount = Infinity;

  constructor(
    private renderer: Renderer2,
    private categoryCb: CategoryCbGQL,
    private categoryCbs: CategoryCbsGQL,
    private postsCbsGQL: PostCbsGQL,
    private route: ActivatedRoute,
    private router: Router,
     @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'archive');
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      
      this.categoryCbs.fetch({
        locale: "en",
        categorySlug: slug,        
      }).subscribe((response) => {
        if (response.data.categoryCbs?.data.length) {
          this.category = response.data.categoryCbs.data[0] as CategoryCbEntity;
          this.mostRecentByParams()
        }
      });
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
      categoryId: this.category.id,
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

  pageChange(page: number) {}

  buildLink(post: PostCbEntity) {
    return buildLink(post)
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
     const isScrolled = whenPageScrolled(this.document)

    if (isScrolled && !this.lockScrollFetch) {
      this.lockScrollFetch = true;
      
      this.router.navigate(['category',this.category.attributes?.Slug], {
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
