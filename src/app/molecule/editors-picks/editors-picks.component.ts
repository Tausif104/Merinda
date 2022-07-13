import { Component, OnInit, Input } from '@angular/core';
import { renderImage } from 'src/app/utils/image-parse';
import { PostCbEntity } from 'src/generated/graphql';

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
    }
  }

  getPostImage(post: PostCbEntity) {
    return renderImage(post);
  }

}
