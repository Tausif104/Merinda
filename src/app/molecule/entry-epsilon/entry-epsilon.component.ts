import { Component, Input, OnInit } from '@angular/core';
import { buildLink } from 'src/app/utils/build-link';
import { renderImage } from 'src/app/utils/render-image';
import { PostCbEntity, UploadFileEntity } from 'src/generated/graphql';

@Component({
  selector: 'app-entry-epsilon',
  templateUrl: './entry-epsilon.component.html',
  styleUrls: ['./entry-epsilon.component.scss']
})
export class EntryEpsilonComponent implements OnInit {

  @Input() post: PostCbEntity;

  constructor() { }

  ngOnInit(): void {
  }
  
  getPostImage(post: PostCbEntity) {
    return renderImage(post.attributes?.fields?.Image?.data as UploadFileEntity[]);
  }

  buildLink(post: PostCbEntity) {
    return buildLink(post)
  }
}
