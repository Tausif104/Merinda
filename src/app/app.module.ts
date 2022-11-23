import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApolloModule } from 'apollo-angular';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminGuard } from './guard/admin.guard';
import { NzMessageModule } from 'ng-zorro-antd/message';


registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    ApolloModule,
    HttpClientModule,
    TransferHttpCacheModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    GraphQLModule,
    BrowserAnimationsModule,
    NzMessageModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, AdminGuard],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule]
})
export class AppModule {}