import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { interval, Subject, throttle } from 'rxjs';
import { SpinnerService } from 'src/app/service/spinner.service';
import { getFirstImageFromPostContent, getFirstTextFromPostContent } from 'src/app/utils/editor.util';
import { FindPostGQL, Post } from 'src/generated/graphql';

@Component({
  selector: 'app-post-list-alpha',
  templateUrl: './post-list-alpha.component.html',
  styleUrls: ['./post-list-alpha.component.scss']
})
export class PostListAlphaComponent implements OnInit {

  data: Post[] = [];
  page = 0;
  size = 10;
  fetchPostSubject$ = new Subject<void>();
  hasMore = true;

  @ViewChild('container') containerRef: ElementRef;

  constructor(
    private findPostGQL: FindPostGQL,
    private spinnerService: SpinnerService,
  ) { }

  ngOnInit(): void {
    this.fetchPostListener();
    this.fetchPosts();
  }

  restart() {
    this.data = [];
    this.page = 0;
    this.hasMore = true;
    this.fetchPosts();
  }

  fetchPostListener() {
    this.spinnerService.show();
    this.fetchPostSubject$.pipe(
      throttle(() => interval(1000))
    ).subscribe(() => {
      this.findPostGQL.fetch({
        findPostInput: {
          skip: this.page,
          take: this.size
        }
      }).subscribe((response) => {
        const posts = response.data.findPost as Post[];

        this.data = [
          ...this.data,
          ...posts,
        ]

        if (posts.length < this.size) {
          this.hasMore = false;
        }

        if (this.hasMore) {
          this.page += this.size;
        }

        this.spinnerService.hide();
      });
    });
  }

  fetchPosts() {
    this.fetchPostSubject$.next();
  }

  getContentImage(post: Post) {
    return getFirstImageFromPostContent(post);
  }

  getContentText(post: Post) {
    return getFirstTextFromPostContent(post);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    console.log(this.hasMore);
    
    if (window.pageYOffset + this.containerRef.nativeElement.clientHeight > this.containerRef.nativeElement.offsetHeight * 0.7) {
      if (this.hasMore) {
        this.fetchPosts();
      }
    }
  }
}
