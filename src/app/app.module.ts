import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DailyQuoteComponent } from './components/daily-quote/daily-quote.component';
import { WriteQuoteComponent } from './components/write-quote/write-quote.component';
import { QuoteComponent } from './components/quote/quote.component';
import { VoteComponent } from './components/vote/vote.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DailyQuoteComponent,
    WriteQuoteComponent,
    QuoteComponent,
    VoteComponent,
    DateAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
