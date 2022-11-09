import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Kalkulator1Component } from './kalkulator1/kalkulator1.component';
import { Kalkulator2Component } from './kalkulator2/kalkulator2.component';
import { Kalkulator3Component } from './kalkulator3/kalkulator3.component';

@NgModule({
  declarations: [
    AppComponent,
    Kalkulator1Component,
    Kalkulator2Component,
    Kalkulator3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
