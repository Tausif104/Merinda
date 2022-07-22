import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { buildLink } from 'src/app/utils/build-link';
import { PostCbEntity } from 'src/generated/graphql';

@Component({
  selector: 'app-search-alpha',
  templateUrl: './search-alpha.component.html',
  styleUrls: ['./search-alpha.component.scss']
})
export class SearchAlphaComponent implements OnInit, OnDestroy {

  posts: PostCbEntity[] = [];
  postsSize: number;
  page: number;

  constructor(
    private renderer: Renderer2,
     @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'archive');
  }

  ngOnDestroy(): void {
      this.renderer.removeClass(this.document.body, 'archive');
  }

  pageChange(page: number) {
    
  }

  buildLink(post: PostCbEntity) {
    return buildLink(post)
  }

}
