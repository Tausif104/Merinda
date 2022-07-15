import { Component, OnInit, Input } from '@angular/core';
import { renderImage } from 'src/app/utils/render-image';
import { PostCbEntity, UploadFileEntity } from 'src/generated/graphql';

@Component({
  selector: 'app-content-ad',
  templateUrl: './content-ad.component.html',
  styleUrls: ['./content-ad.component.scss']
})
export class ContentAdComponent implements OnInit {

  @Input() posts: PostCbEntity[] = [];

  constructor() {}

  ngOnInit(): void {}

  getPostImage(post: PostCbEntity) {
    return renderImage(post.attributes?.fields?.Image?.data as UploadFileEntity[]);
  }

}
