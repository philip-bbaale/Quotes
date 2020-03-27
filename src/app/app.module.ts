import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DailyQuoteComponent } from './components/daily-quote/daily-quote.component';
import { WriteQuoteComponent } from './components/write-quote/write-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    DailyQuoteComponent,
    WriteQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
