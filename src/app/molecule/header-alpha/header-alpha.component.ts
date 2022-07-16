import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CategoryCbEntity } from 'src/generated/graphql';

@Component({
  selector: 'app-header-alpha',
  templateUrl: './header-alpha.component.html',
  styleUrls: ['./header-alpha.component.scss']
})
export class HeaderAlphaComponent implements OnInit {
  language: string | null = 'en';
  @Input() categories: CategoryCbEntity[] = [];
  isSearchBarOpen: boolean | null =  false;

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    this.language = localStorage.getItem('lang');
    console.log(this.categories);
  }
  //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }
}
