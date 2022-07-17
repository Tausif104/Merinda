import { Component, Input, OnInit } from '@angular/core';
import { buildLink } from 'src/app/utils/build-link';
import { renderImage } from 'src/app/utils/render-image';
import { PostCbEntity, UploadFileEntity, UsersPermissionsUserEntity } from 'src/generated/graphql';


@Component({
  selector: 'app-entry-meta-alpha',
  templateUrl: './entry-meta-alpha.component.html',
  styleUrls: ['./entry-meta-alpha.component.scss']
})
export class EntryMetaAlphaComponent implements OnInit {
  @Input() post: PostCbEntity;
  author: UsersPermissionsUserEntity;

  constructor() {}

  ngOnInit(): void {
    this.author = this.post.attributes?.user?.data as UsersPermissionsUserEntity;
  }

  getImage(author: UsersPermissionsUserEntity) {
    return renderImage([author.attributes?.image?.data] as UploadFileEntity[]);
  }
  
  getLink(author: UsersPermissionsUserEntity) {
    return `/author/${author.attributes?.firstname}_${author.attributes?.lastname}`.toLowerCase();
  }
}
