import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelkinHeaderComponent } from '../project/welkin-header/welkin-header.component';
import { ProductBirdDiverterComponent } from '../project/product-bird-diverter/product-bird-diverter.component';

@NgModule({
  declarations: [
    AppComponent,
    WelkinHeaderComponent,
    ProductBirdDiverterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
