import { Component, Input, OnInit } from '@angular/core';
import { renderImage } from 'src/app/utils/render-image';
import { Maybe, UploadFileEntity, UsersPermissionsUserEntity, UsersPermissionsUserEntityResponse } from 'src/generated/graphql';

@Component({
  selector: 'app-post-author-alpha',
  templateUrl: './post-author-alpha.component.html',
  styleUrls: ['./post-author-alpha.component.scss']
})
export class PostAuthorAlphaComponent implements OnInit {
  @Input() author: UsersPermissionsUserEntity;

  constructor() { }

  ngOnInit(): void {}

  getImage(author: UsersPermissionsUserEntity) {
    return renderImage([author.attributes?.image?.data] as UploadFileEntity[]);
  }
  
  getLink(author: UsersPermissionsUserEntity) {
    return `/author/${author.attributes?.firstname}_${author.attributes?.lastname}`.toLowerCase();
  }
}
