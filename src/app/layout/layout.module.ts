import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MoleculeModule } from '../molecule/molecule.module';
import { LayoutAlphaComponent } from './layout-alpha/layout-alpha.component';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutBetaComponent } from './layout-beta/layout-beta.component';
import { NgZorroAntdModule } from '../ng-zorro-ant.module';

@NgModule({
  declarations: [LayoutAlphaComponent, LayoutBetaComponent],
  imports: [RouterModule, MoleculeModule, BrowserModule, CommonModule, NgZorroAntdModule],
  providers: [],
})
export class LayoutModule {}
