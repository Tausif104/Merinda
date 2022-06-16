import { Component, OnInit } from '@angular/core';
import { get } from 'scriptjs';
import { CategoriesGQL, LocalesGQL, PostsByCategoryGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'blog';

  constructor(private localeGQL: LocalesGQL, private postsByCategoryGQL: PostsByCategoryGQL, private categoriesGQL: CategoriesGQL) {}

  ngOnInit(): void {
    get('/assets/js/scripts.js', () => {
      //Google Maps library has been loaded...
    });

    let defaultLocale = ""
    let defaultCategoryId = ""
    this.localeGQL.fetch().subscribe((locales) => {
      const localeCodes = locales.data.i18NLocales?.data.map((data) => {
        console.log(data.attributes?.name);
        return data.attributes?.code
      }) || [];

      defaultLocale = localeCodes[0] || ""
      console.log({ locales });

      this.categoriesGQL.fetch({
        locale: defaultLocale
      }).subscribe((response) => {
        defaultCategoryId = response.data.categories?.data[0].id || "";

        console.log({categories: response.data.categories});
        
        this.postsByCategoryGQL.fetch({
          id: defaultCategoryId,
          locale: defaultLocale
        }).subscribe((response) => {
          const categoryName = response.data.category?.data?.attributes?.Name;
          const categoryMetaDescription = response.data.category?.data?.attributes?.Meta_Description;

          const categoryPosts = response.data.category?.data?.attributes?.posts;
          console.log({ categoryPosts });
        });
      });
    });
  }
}
