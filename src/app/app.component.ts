import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { get } from 'scriptjs';
import { CategoriesGQL, LocalesGQL, PostsByCategoryGQL } from 'src/generated/graphql';
import { TranslateCacheService } from 'ngx-translate-cache';

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
    private postsByCategoryGQL: PostsByCategoryGQL,
    private categoriesGQL: CategoriesGQL,
    private translate: TranslateService,
    translateCacheService: TranslateCacheService

    ) {
      translateCacheService.init();
      translate.addLangs(['en', 'nl']);
      this.browserLang = translateCacheService.getCachedLanguage() || translate.getBrowserLang();
      translate.use(this.browserLang.match(/en|nl/) ? this.browserLang : 'en');
  }

  ngOnInit(): void {
    get('/assets/js/scripts.js', () => {
      //Google Maps library has been loaded...
    });
 
    let defaultLocale = this.browserLang;
    localStorage.setItem('lang', this.browserLang)
    
    let defaultCategoryId = ""
    this.localeGQL.fetch().subscribe((locales) => {
      const localeCodes = locales.data.i18NLocales?.data.map((data) => {     
        return data.attributes?.code
      }) || [];
      defaultLocale = this.browserLang ||localeCodes[0] || "";

      this.categoriesGQL.fetch({
        locale: defaultLocale
      }).subscribe((response) => {
        if(response.data.categories?.data.length){
          defaultCategoryId = response.data.categories?.data[0].id || "";
         }
        
        this.postsByCategoryGQL.fetch({
          id: defaultCategoryId,
          locale: defaultLocale
        }).subscribe((response) => {
          const categoryName = response.data.category?.data?.attributes?.Name;
          const categoryMetaDescription = response.data.category?.data?.attributes?.Meta_Description;

          const categoryPosts = response.data.category?.data?.attributes?.posts;
          
        });
      });
    });
  }
}
