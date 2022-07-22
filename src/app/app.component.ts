import { Component, OnInit } from '@angular/core';
import { CategoryCbsGQL, LocalesGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'blog';
  browserLang:any;
  constructor(
    private localeGQL: LocalesGQL,
    private categoryCbsGQL: CategoryCbsGQL,
    ) {}

  ngOnInit(): void {
    // get('/assets/js/scripts.js', () => {
    //   //Google Maps library has been loaded...
    // });
  }
}
