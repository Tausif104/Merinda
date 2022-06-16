import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApolloModule } from 'apollo-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { LayoutModule } from './layout/layout.module';
import { OrganismModule } from './organism/organism.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ApolloModule,
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    OrganismModule,
    LayoutModule,
    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
