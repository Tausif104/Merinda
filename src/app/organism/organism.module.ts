import { NgModule } from '@angular/core';
import { MoleculeModule } from '../molecule/molecule.module';
import { HomeAlphaComponent } from './home-alpha/home-alpha.component';
import { BrowserModule } from '@angular/platform-browser';
import { AtomModule } from '../atom/atom.module';
import { CategoryAlphaComponent } from './category-alpha/category-alpha.component';
import { PageAlphaComponent } from './page-alpha/page-alpha.component';
import { ProductPageAlphaComponent } from './product-page-alpha/product-page-alpha.component';
import { NotFoundAlphaComponent } from './not-found-alpha/not-found-alpha.component';
import { PageListAlphaComponent } from './page-list-alpha/page-list-alpha.component';
import { PostListAlphaComponent } from './post-list-alpha/post-list-alpha.component';
import { PostAlphaComponent } from './post-alpha/post-alpha.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { LoginAlphaComponent } from './login-alpha/login-alpha.component';
import { PostBetaComponent } from './post-beta/post-beta.component';

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
    PostBetaComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MoleculeModule,
    AtomModule
  ],
  providers: [],
  exports: [
  ]
})
export class OrganismModule {}