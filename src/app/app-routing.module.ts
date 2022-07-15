import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAlphaComponent } from './layout/layout-alpha/layout-alpha.component';
import { ArchiveAlphaComponent } from './organism/archive-alpha/archive-alpha.component';
import { AuthorAlphaComponent } from './organism/author-alpha/author-alpha.component';
import { CategoryAlphaComponent } from './organism/category-alpha/category-alpha.component';
import { HomeAlphaComponent } from './organism/home-alpha/home-alpha.component';
import { SearchAlphaComponent } from './organism/search-alpha/search-alpha.component';
import { SingleAlphaComponent } from './organism/single-alpha/single-alpha.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAlphaComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: '',
        component: HomeAlphaComponent, // child route component that the router renders
      },
      {
        path: 'post/:slug',
        component: SingleAlphaComponent, // child route component that the router renders
      },
      {
        path: 'author/:slug',
        component: AuthorAlphaComponent, // child route component that the router renders
      },
      {
        path: 'category/:slug',
        component: CategoryAlphaComponent, // child route component that the router renders
      },
      {
        path: 'search',
        component: SearchAlphaComponent, // child route component that the router renders
      },
      {
        path: 'archive',
        component: ArchiveAlphaComponent, // child route component that the router renders
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
