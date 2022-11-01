import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MoleculeModule } from '../molecule/molecule.module';
import { LayoutAlphaComponent } from './layout-alpha/layout-alpha.component';
import { BrowserModule } from '@angular/platform-browser';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { IconsProviderModule } from '../icons-provider.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { LayoutBetaComponent } from './layout-beta/layout-beta.component';
import { NzListModule } from 'ng-zorro-antd/list';

@NgModule({
  declarations: [LayoutAlphaComponent, LayoutBetaComponent],
  imports: [RouterModule, MoleculeModule, BrowserModule, CommonModule, NzLayoutModule, IconsProviderModule, NzMenuModule, NzListModule],
  providers: [],
})
export class LayoutModule {}
