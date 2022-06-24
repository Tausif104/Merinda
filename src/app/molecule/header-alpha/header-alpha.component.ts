import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-alpha',
  templateUrl: './header-alpha.component.html',
  styleUrls: ['./header-alpha.component.scss']
})
export class HeaderAlphaComponent implements OnInit {
  Setlanguage:any = 'en';
  constructor(public translate: TranslateService) {
   }

  ngOnInit(): void {
    this.Setlanguage = localStorage.getItem('lang');
  }
  //Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
  }
}
