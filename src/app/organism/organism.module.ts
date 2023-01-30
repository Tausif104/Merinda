import { NgModule } from '@angular/core';
import { MoleculeModule } from '../molecule/molecule.module';
import { HomeAlphaComponent } from './home-alpha/home-alpha.component';
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
import { LoginAlphaComponent } from './login-alpha/login-alpha.component';
import { PostBetaComponent } from './post-beta/post-beta.component';
import { MediaAlphaComponent } from './media-alpha/media-alpha.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { FeatureLeftComponent } from './feature-left/feature-left.component';
import { FeatureRightComponent } from './feature-right/feature-right.component';
import { PromoSectionComponent } from './promo-section/promo-section.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { PostItemComponent } from './post-item/post-item.component';
import { PostItemListsComponent } from './post-item-lists/post-item-lists.component';
import { FooterComponent } from './footer/footer.component';

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
    MediaAlphaComponent,
    BannerComponent,
    HeaderComponent,
    FeatureLeftComponent,
    FeatureRightComponent,
    PromoSectionComponent,
    NewsletterComponent,
    PostItemComponent,
    PostItemListsComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MoleculeModule,
    AtomModule
  ],
  providers: [],
  exports: [
  ]
})
export class OrganismModule { }