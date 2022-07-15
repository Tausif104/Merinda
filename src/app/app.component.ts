import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { get } from 'scriptjs';
import { CategoryCbsGQL, LocalesGQL } from 'src/generated/graphql';
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
    private categoryCbsGQL: CategoryCbsGQL,
    private translate: TranslateService,
    private translateCacheService: TranslateCacheService,
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
 
    let defaultLocale = this.browserLang as string;
    localStorage.setItem('lang', this.browserLang)
    
    let defaultCategoryId = ""
    this.localeGQL.fetch().subscribe((locales) => {
      const localeCodes = locales.data.i18NLocales?.data.map((data) => {     
        return data.attributes?.code
      }) || [];
      defaultLocale = this.browserLang ||localeCodes[0] || "";

      this.categoryCbsGQL.fetch({
        locale: defaultLocale
      }).subscribe((response) => {
        // if(response.data.categoryCbs?.data.length){
        //   defaultCategoryId = response.data.categoryCbs?.data[0].id || "";
        //  }
        
        // this.postsByCategoryCbGQL.fetch({
        //   id: defaultCategoryId
        // }).subscribe((response) => {
        //   const categoryName = response.data.categoryCb?.data?.attributes?.Name;
        //   const categoryMetaDescription = response.data.categoryCb?.data?.attributes?.Meta_Description;
        //   const categoryPosts = response.data.categoryCb?.data?.attributes?.post_cbs;
          
        // });

      //   this.sectionsGQL.fetch().subscribe((response) => {
      //     const editorsPickSection = response.data.sectionsCbs?.data.find((data) => {
      //       data.attributes?.Name === 'Editors Pick' || data.id === "1"
      //       return data;
      //     });

      //     if (editorsPickSection) {
      //       this.postsBySectionGQL.fetch({
      //         locale: defaultLocale,
      //         section: {
      //           eq: editorsPickSection?.id
      //         }
      //       }). subscribe((response) => {
      //         const editorsPickPosts =  response.data.postCbs?.data

      //         console.log({editorsPickPosts});
      //       });            
      //     }
      //   })

      });
    });
  }
}
