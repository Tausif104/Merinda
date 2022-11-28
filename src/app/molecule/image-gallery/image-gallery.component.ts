import { Component, Input, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { map } from 'rxjs';
import { FileService } from 'src/app/service/file.service';
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
  @Input() isVisible = false;

  constructor(
    private fileService: FileService,
    private messageService: NzMessageService
  ) {}

  // ngOnChanges() {
  //   this.fetchImages();
  // }

  ngOnInit(): void {
    this.fetchImages();
  }

  fetchImages() {
    this.fileService.find({
      skip: this.page,
      take: this.size
    }).subscribe((response) => {
      const files = response.data.file as File[];

      if (files.length < this.size) {
        this.hasMore = false;
      }

      this.images = [...this.images, ...files];
      this.page += this.size;
    });
  }

  copy() {
    this.messageService.success('Link has coppied');
    this.isVisible = false;
  }

  modalOk() {
    this.isVisible = false;
  }

  modalCancel() {
    this.isVisible = false;
  }
}
