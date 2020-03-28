import { Component, OnInit } from '@angular/core';
import { Quotes } from '../../classes/quotes';
import { VoteComponent} from '../vote/vote.component'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quotes[]=[
    {names:'Bbaale Philip', quote:'To be young is to be ausome.', email:'namugera.philip@gmail.com'},
    {names:'Benita Kafrika', quote:'If you want to be successful, its just this simple. Know what you are doing. Love what you are doing. And believe in what you are doing.', email:'bkafrika@gmail.com'},
    {names:'JudeMartin', quote:"Issues are never simple. One thing I'm proud of is that very rarely will you hear me simplify the issues.", email:'judebbaale@gmail.com'},
    {names:'Mackenzie', quote:"It would be so simple to allow children, when tired of sitting, to rise, and when tired of writing, to desist, and then their bones would not be twisted.", email:'mackenzie@gmail.com'},
    {names:'Patricia', quote:"Tramping is too easy with all this money. My days were more exciting when I was penniless and had to forage around for my next meal... I've decided that I'm going to live this life for some time to come. The freedom and simple beauty of it is just too good to pass up.", email:'patricia@gmail.com'},
    {names:'Rodney Kaneene', quote:"If you want to be successful, it's just this simple. Know what you are doing. Love what you are doing. And believe in what you are doing.", email:'rodney@gmail.com'},
    {names:'Sir Faith', quote:"All the great things are simple, and many can be expressed in a single word: freedom, justice, honor, duty, mercy, hope.", email:'faith@gmail.com'},
    {names:'Nakato', quote:"It would be so simple to allow children, when tired of sitting, to rise, and when tired of writing, to desist, and then their bones would not be twisted.", email:'nakato@gmail.com'},
    {names:'John Githaiga', quote:"What you do on immigration policy, what you do on education policy, what you do on tax, regulatory, and energy policy, all connects together - and will be based on a simple determination about what will make life better in America for American citizens.", email:'john@gmail.com'},
    {names:'Meshak Victor', quote:"Simplicity is complex. It's never simple to keep things simple. Simple solutions require the most advanced thinking.", email:'meshak@gmail.com'}
  ]

  
  addNewQuote(quote){
    this.quotes.unshift(quote)
  }
  
  constructor() { }

  ngOnInit(): void {
  
  }

}
