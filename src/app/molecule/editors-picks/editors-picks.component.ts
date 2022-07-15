import { Component, OnInit, Input } from '@angular/core';
import { buildLink } from 'src/app/utils/build-link';
import { renderImage } from 'src/app/utils/render-image';
import { PostCbEntity, UploadFileEntity } from 'src/generated/graphql';

@Component({
  selector: 'app-editors-picks',
  templateUrl: './editors-picks.component.html',
  styleUrls: ['./editors-picks.component.scss']
})
export class EditorsPicksComponent implements OnInit {

  @Input() posts: PostCbEntity[] = []; 
  firstPost?: PostCbEntity; 

  constructor() { }

  ngOnInit(): void {
    if (this.posts.length) {
      this.firstPost = this.posts[0];
      console.log(this.firstPost);
    }
  }

  getPostImage(post: PostCbEntity) {
    return renderImage(post.attributes?.fields?.Image?.data as UploadFileEntity[]);
  }

  buildLink(post: PostCbEntity) {
    return buildLink(post)
  }

}
