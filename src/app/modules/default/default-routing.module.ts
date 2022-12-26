import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LayoutBetaComponent } from "src/app/layout/layout-beta/layout-beta.component";
import { HomeAlphaComponent } from "src/app/organism/home-alpha/home-alpha.component";
import { LoginAlphaComponent } from "src/app/organism/login-alpha/login-alpha.component";


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
            path: 'login',
            component: LoginAlphaComponent,
          },
        ],
      },
    ]),
  ],
  exports: [],
  providers: []
})
export class DefaultRoutingModule { }