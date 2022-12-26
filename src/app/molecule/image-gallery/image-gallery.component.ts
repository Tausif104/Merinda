import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { interval, Subject, tap, throttle } from 'rxjs';
import { FileService } from 'src/app/service/file.service';
import { SpinnerService } from 'src/app/service/spinner.service';
import { File } from 'src/generated/graphql';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {

  images: File[] = [];
  page = 0;
  size = 10;
  hasMore = true;
  @Output() onSelect = new EventEmitter();
  @Input() reloadSubject: Subject<void>;
  @Input() showLoadMore = false;
  @Input() disablePreview = false;
  fetchImages$ = new Subject<void>();

  @ViewChild('container')
  containerRef: ElementRef;

  constructor(
    private fileService: FileService,
    private messageService: NzMessageService,
    private spinnerService: SpinnerService
  ) { }

  ngOnInit(): void {
    if (this.reloadSubject) {
      this.reloadSubject.subscribe(() => {
        this.restart();
      });
    }
    this.fetchImageListener();
    this.fetchImages$.next();
  }

  restart() {
    this.images = [];
    this.page = 0;
    this.hasMore = true;
    this.fetchImages$.next();
  }

  fetchImageListener() {
    this.fetchImages$.pipe(
      throttle(() => interval(1000))
    ).pipe(tap(() => {
      this.spinnerService.show();
    })).subscribe(() => {
      if (!this.hasMore) {
        return;
      }

      this.fileService.find({
        skip: this.page,
        take: this.size
      }).subscribe((response) => {
        const files = response.data.file as File[];

        this.images = [...this.images, ...files];

        if (files.length < this.size) {
          this.hasMore = false;
        }

        if (this.hasMore) {
          this.page += this.size;
        }

        this.spinnerService.hide();
      });
    })
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (window.pageYOffset + this.containerRef.nativeElement.clientHeight > this.containerRef.nativeElement.offsetHeight * 0.7) {
      if (this.hasMore) {
        this.fetchImages$.next();
      }
    }
  }

  loadMore() {
    this.fetchImages$.next();
  }
}
