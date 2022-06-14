import { NgModule } from '@angular/core';
import { HeaderAlphaComponent } from './header-alpha/header-alpha.component';
import { FooterAlphaComponent } from './footer-alpha/footer-alpha.component';
import { PostAlphaComponent } from './post-alpha/post-alpha.component';
import { AdsComponent } from './ads/ads.component';
import { CultureAlphaComponent } from './culture-alpha/culture-alpha.component';
import { PostAuthorAlphaComponent } from './post-author-alpha/post-author-alpha.component';
import { DateAddressAlphaComponent } from './date-address-alpha/date-address-alpha.component';

const Components = [HeaderAlphaComponent, FooterAlphaComponent,PostAlphaComponent,AdsComponent,CultureAlphaComponent,PostAuthorAlphaComponent,DateAddressAlphaComponent];

@NgModule({
  declarations: [...Components],
  imports: [],
  providers: [],
  exports: [...Components],
})
export class MoleculeModule {}
