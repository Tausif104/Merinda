import { Component, Input, OnInit } from '@angular/core';
import { buildLink } from 'src/app/utils/build-link';
import { renderImage } from 'src/app/utils/render-image';
import { PostCbEntity, UploadFileEntity } from 'src/generated/graphql';

@Component({
  selector: 'app-entry-gamma',
  templateUrl: './entry-gamma.component.html',
  styleUrls: ['./entry-gamma.component.scss']
})
export class EntryGammaComponent implements OnInit {

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
