import { NgModule } from '@angular/core';
import { MoleculeModule } from 'src/app/molecule/molecule.module';

import { CategoryAlphaComponent } from 'src/app/organism/category-alpha/category-alpha.component';
import { HomeAlphaComponent } from 'src/app/organism/home-alpha/home-alpha.component';
import { LoginAlphaComponent } from 'src/app/organism/login-alpha/login-alpha.component';
import { NotFoundAlphaComponent } from 'src/app/organism/not-found-alpha/not-found-alpha.component';
import { PageAlphaComponent } from 'src/app/organism/page-alpha/page-alpha.component';
import { PageListAlphaComponent } from 'src/app/organism/page-list-alpha/page-list-alpha.component';
import { PostAlphaComponent } from 'src/app/organism/post-alpha/post-alpha.component';
import { PostListAlphaComponent } from 'src/app/organism/post-list-alpha/post-list-alpha.component';
import { ProductPageAlphaComponent } from 'src/app/organism/product-page-alpha/product-page-alpha.component';
import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  declarations: [
    HomeAlphaComponent,
    CategoryAlphaComponent,
    PageAlphaComponent,
    ProductPageAlphaComponent,
    NotFoundAlphaComponent,
    PageListAlphaComponent,
    PostListAlphaComponent,
    PostAlphaComponent,
    LoginAlphaComponent,
  ],
  imports: [
    MoleculeModule,
    AdminRoutingModule
  ],
  providers: [],
  exports: []
})
export class AdminModule {}