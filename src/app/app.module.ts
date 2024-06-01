import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StdComponent } from './shared/components/std/std.component';
import { Std2Component } from './shared/components/std2/std2.component';

@NgModule({
  declarations: [
    AppComponent,
    StdComponent,
    Std2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
