import { NgModule } from '@angular/core';
import { AtomModule } from '../atom/atom.module';
import { HeaderAlphaComponent } from './header-alpha/header-alpha.component';
import { FooterAlphaComponent } from './footer-alpha/footer-alpha.component';

const Components = [HeaderAlphaComponent, FooterAlphaComponent];

@NgModule({
  declarations: [...Components],
  imports: [AtomModule],
  providers: [],
  exports: [...Components],
})
export class MoleculeModule {}
