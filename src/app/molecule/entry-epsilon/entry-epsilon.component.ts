import { Component, Input, OnInit } from '@angular/core';
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
}
