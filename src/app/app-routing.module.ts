import { NgModule } from "@angular/core";
import { Routes, RouterModule, ROUTES } from "@angular/router";
import { LayoutAlphaComponent } from "./layout/layout-alpha/layout-alpha.component";
import { LayoutBetaComponent } from "./layout/layout-beta/layout-beta.component";
import { HomeAlphaComponent } from "./organism/home-alpha/home-alpha.component";
import { NotFoundAlphaComponent } from "./organism/not-found-alpha/not-found-alpha.component";
import { PageAlphaComponent } from "./organism/page-alpha/page-alpha.component";
import { PageListAlphaComponent } from "./organism/page-list-alpha/page-list-alpha.component";

const children = [
      {
        path: '',
        component: HomeAlphaComponent,
      },
      {
        path: 'pages',
        component: PageListAlphaComponent,
      },
      { path: 'not-found', component: NotFoundAlphaComponent },
    ]


@NgModule({
  imports: [
    RouterModule.forRoot([]),
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: ROUTES,
      useFactory: configHandlerRoutes,
      deps: [],
      multi: true
    }
  ]
})
export class AppRoutingModule {}

export function configHandlerRoutes() {
  let routes: Routes = [];

  if (true) {
    routes = [
      {
        path: '',
        component: LayoutAlphaComponent,
        children: children,
      },
      { path: '**',   redirectTo: '/not-found', pathMatch: 'full' },
    ];
  } else {
    routes = [
      {
        path: '',
        component: LayoutBetaComponent,
        children: children,
      },
      { path: '**',   redirectTo: '/not-found', pathMatch: 'full' },
    ];
  }

  return routes;
}