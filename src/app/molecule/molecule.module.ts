import { NgModule } from '@angular/core';
import { HeaderAlphaComponent } from './header-alpha/header-alpha.component';
import { FooterAlphaComponent } from './footer-alpha/footer-alpha.component';
import { AtomModule } from '../atom/atom.module';
import { LayoutBetaComponent } from '../layout/layout-beta/layout-beta.component';
import { LayoutAlphaComponent } from '../layout/layout-alpha/layout-alpha.component';

const Components = [
  HeaderAlphaComponent, 
  FooterAlphaComponent,
  LayoutAlphaComponent,
  LayoutBetaComponent
];

@NgModule({
  declarations: [...Components],
  imports: [AtomModule],
  providers: [],
  exports: [
    ...Components,
    AtomModule
  ],
})
export class MoleculeModule {}
