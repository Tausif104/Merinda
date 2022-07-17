import { NgModule } from '@angular/core';
import { HeaderAlphaComponent } from './header-alpha/header-alpha.component';
import { FooterAlphaComponent } from './footer-alpha/footer-alpha.component';
import { AdsComponent } from './ads/ads.component';
import { PostAuthorAlphaComponent } from './post-author-alpha/post-author-alpha.component';
import { EntryMetaAlphaComponent } from './entry-meta-alpha/entry-meta-alpha.component';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { ContentAdComponent } from './content-ad/content-ad.component';
import { HeroAlphaComponent } from './hero-alpha/hero-alpha.component';
import { ImagePathPipe } from '../pipe/image.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EntryAlphaComponent } from './entry-alpha/entry-alpha.component';
import { EntryBetaComponent } from './entry-beta/entry-beta.component';
import { EntryGammaComponent } from './entry-gamma/entry-gamma.component';
import { EntryEpsilonComponent } from './entry-epsilon/entry-epsilon.component';

const Components = [
  HeaderAlphaComponent, 
  FooterAlphaComponent,
  AdsComponent,
  PostAuthorAlphaComponent, 
  EntryMetaAlphaComponent,
  ContentAdComponent,
  HeroAlphaComponent,
  EntryAlphaComponent, 
  EntryBetaComponent,
  EntryGammaComponent,
  EntryEpsilonComponent
];

@NgModule({
  declarations: [...Components, ImagePathPipe],
  imports: [BrowserModule, TranslateModule, NgbModule],
  providers: [ImagePathPipe],
  exports: [...Components, TranslateModule, NgbModule],
})
export class MoleculeModule {}
