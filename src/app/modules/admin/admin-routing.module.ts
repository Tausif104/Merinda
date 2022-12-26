import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminGuard } from "src/app/guard/admin.guard";
import { LayoutAlphaComponent } from "src/app/layout/layout-alpha/layout-alpha.component";
import { MediaAlphaComponent } from "src/app/organism/media-alpha/media-alpha.component";
import { NotFoundAlphaComponent } from "src/app/organism/not-found-alpha/not-found-alpha.component";
import { PostAlphaComponent } from "src/app/organism/post-alpha/post-alpha.component";
import { PostListAlphaComponent } from "src/app/organism/post-list-alpha/post-list-alpha.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
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
              
            },
            {
              path: 'posts',
              component: PostListAlphaComponent,
            },
            {
              path: 'medias',
              component: MediaAlphaComponent,
            },
            { path: 'not-found', component: NotFoundAlphaComponent },
        ],
      },
      { path: '**',   redirectTo: '/admin/not-found', pathMatch: 'full' },
    ]),
  ],
  exports: [],
  providers: []
})
export class AdminRoutingModule {}