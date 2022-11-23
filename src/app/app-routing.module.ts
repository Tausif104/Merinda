import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DefaultModule } from "./modules/default/default.module";
import { NotFoundAlphaComponent } from "./organism/not-found-alpha/not-found-alpha.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'admin',
        loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: '',
        loadChildren: () => import('./modules/default/default.module').then(m => m.DefaultModule)
      },
      { path: 'not-found', component: NotFoundAlphaComponent },
      { path: '**',   redirectTo: '/admin/posts/new', pathMatch: 'full' },
    ]),
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}