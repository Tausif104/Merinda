import { Component, OnInit } from '@angular/core';
import { getImageFromPostContent, getTextFromPostContent } from 'src/app/utils/editor.util';
import { CreatePostGQL, FindPostGQL, FindPostQuery, Post } from 'src/generated/graphql';

interface ItemData {
  href: string;
  title: string;
  avatar: string;
  description: string;
  content: string;
}

@Component({
  selector: 'app-post-list-alpha',
  templateUrl: './post-list-alpha.component.html',
  styleUrls: ['./post-list-alpha.component.scss']
})
export class PostListAlphaComponent implements OnInit {

  data: Post[] = [];

  constructor(
    private findPostGQL: FindPostGQL
  ) {}

  ngOnInit(): void {
    this.findPostGQL.fetch({
      findPostInput: {
        take: 10
      }
    }).subscribe((response) => {
      this.data = response.data.findPost as Post[];
    })
  }

  getContentImage(post: Post) {
    return getImageFromPostContent(post);
  }

  getContentText(post: Post) {
    return getTextFromPostContent(post);
  }
}
