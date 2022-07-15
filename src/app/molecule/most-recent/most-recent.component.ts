import { Component, OnInit, Input } from '@angular/core';
import { renderImage } from 'src/app/utils/render-image';
import { PostCbEntity, UploadFileEntity } from 'src/generated/graphql';

@Component({
  selector: 'app-most-recent',
  templateUrl: './most-recent.component.html',
  styleUrls: ['./most-recent.component.scss']
})
export class MostRecentComponent implements OnInit {
  @Input() posts: PostCbEntity[];

  constructor() {}

  ngOnInit(): void {
  }

  getPostImage(post: PostCbEntity) {
    return renderImage(post.attributes?.fields?.Image?.data as UploadFileEntity[]);
  }

}
