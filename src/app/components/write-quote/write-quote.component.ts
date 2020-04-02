import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../../classes/quotes';

@Component({
  selector: 'app-write-quote',
  templateUrl: './write-quote.component.html',
  styleUrls: ['./write-quote.component.css']
})
export class WriteQuoteComponent implements OnInit {

  newQoute = new Quotes("","","",0,0,new Date());
  @Output() addQuote = new EventEmitter<Quotes>();

  submitQuote(){
    this.addQuote.emit(this.newQoute);
    this.newQoute = new Quotes("","","",0,0,new Date());
  }
  constructor() { }

  ngOnInit(): void {
  }

}
