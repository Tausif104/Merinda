import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminGuard } from "./guard/admin.guard";
import { LayoutAlphaComponent } from "./layout/layout-alpha/layout-alpha.component";
import { LayoutBetaComponent } from "./layout/layout-beta/layout-beta.component";
import { HomeAlphaComponent } from "./organism/home-alpha/home-alpha.component";
import { LoginAlphaComponent } from "./organism/login-alpha/login-alpha.component";
import { NotFoundAlphaComponent } from "./organism/not-found-alpha/not-found-alpha.component";
import { PostAlphaComponent } from "./organism/post-alpha/post-alpha.component";
import { PostListAlphaComponent } from "./organism/post-list-alpha/post-list-alpha.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: LayoutBetaComponent,
        children: [
            {
              path: '',
              component: HomeAlphaComponent,
            },
            {
              path: 'login',
              component: LoginAlphaComponent,
            },
        ],
      },
      {
        path: 'admin',
        component: LayoutAlphaComponent,
        canActivate: [AdminGuard],
        children: [
          {
              path: 'posts/new',
              component: PostAlphaComponent,
            },
            {
              path: 'posts/:id',
              component: PostAlphaComponent,
            },{
              path: 'posts',
              component: PostListAlphaComponent,
            },
        ],
      },
      { path: 'not-found', component: NotFoundAlphaComponent },
      { path: '**',   redirectTo: '/not-found', pathMatch: 'full' },
    ]),
  ],
  exports: [RouterModule],
  providers: [
    
  ]
})
export class AppRoutingModule {}