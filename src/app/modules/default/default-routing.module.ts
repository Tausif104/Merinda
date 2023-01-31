import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutBetaComponent } from 'src/app/layout/layout-beta/layout-beta.component';
import { BlogDetailsComponent } from 'src/app/organism/blog-details/blog-details.component';
import { CategoryAlphaComponent } from 'src/app/organism/category-alpha/category-alpha.component';
import { HomeAlphaComponent } from 'src/app/organism/home-alpha/home-alpha.component';
import { LoginAlphaComponent } from 'src/app/organism/login-alpha/login-alpha.component';
import { PostBetaComponent } from 'src/app/organism/post-beta/post-beta.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LayoutBetaComponent,
        children: [
          {
            path: '',
            component: HomeAlphaComponent,
          },
          {
            path: 'category',
            component: CategoryAlphaComponent,
          },
          {
            path: 'post',
            component: PostBetaComponent,
          },
          {
            path: 'login',
            component: LoginAlphaComponent,
          },
          {
            path: 'blog-details',
            component: BlogDetailsComponent,
          },
        ],
      },
    ]),
  ],
  exports: [],
  providers: [],
})
export class DefaultRoutingModule {}
