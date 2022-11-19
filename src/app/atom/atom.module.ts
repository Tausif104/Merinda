import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from '../ng-zorro-ant.module';
import { IconsProviderModule } from '../icons-provider.module';

const components: any = [];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconsProviderModule,
    NgZorroAntdModule
  ],
  exports: [
    ...components,
    NgZorroAntdModule,
    IconsProviderModule
  ]
})
export class AtomModule { }
