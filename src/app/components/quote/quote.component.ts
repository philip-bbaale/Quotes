import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../../classes/quotes';
import { VoteComponent} from '../vote/vote.component'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  /*numberofupvotes: any = VoteComponent.numberOfUpVote;
  numberOfDownVotes: any = VoteComponent.numberOfDownVote;*/

  quotes:Quotes[]=[
    {names:'Bbaale Philip', quote:'To be young is to be ausome.', email:'namugera.philip@gmail.com', numberOfUpVotes:1300 ,numberOfDownVotes:330},
    {names:'Benita Kafrika', quote:'You can search throughout the entire universe for someone who is more deserving of your love and affection than you are yourself, and that person is not to be found anywhere. You yourself, as much as anybody in the entire universe deserve your love and affection.', email:'bkafrika@gmail.com', numberOfUpVotes:1300 ,numberOfDownVotes:330},
    {names:'JudeMartin', quote:"Issues are never simple. One thing I'm proud of is that very rarely will you hear me simplify the issues.", email:'judebbaale@gmail.com', numberOfUpVotes:1300 ,numberOfDownVotes:330},
    {names:'Mackenzie', quote:"It would be so simple to allow children, when tired of sitting, to rise, and when tired of writing, to desist, and then their bones would not be twisted.", email:'mackenzie@gmail.com', numberOfUpVotes:1300 ,numberOfDownVotes:330},
    {names:'Patricia', quote:"Tramping is too easy with all this money. My days were more exciting when I was penniless and had to forage around for my next meal... I've decided that I'm going to live this life for some time to come. The freedom and simple beauty of it is just too good to pass up.", email:'patricia@gmail.com', numberOfUpVotes:1300 ,numberOfDownVotes:330},
    {names:'Rodney Kaneene', quote:"If you want to be successful, it's just this simple. Know what you are doing. Love what you are doing. And believe in what you are doing.", email:'rodney@gmail.com', numberOfUpVotes:1300 ,numberOfDownVotes:330},
    {names:'Sir Faith', quote:"All the great things are simple, and many can be expressed in a single word: freedom, justice, honor, duty, mercy, hope.", email:'faith@gmail.com', numberOfUpVotes:1300 ,numberOfDownVotes:330},
    {names:'Nakato', quote:"It would be so simple to allow children, when tired of sitting, to rise, and when tired of writing, to desist, and then their bones would not be twisted.", email:'nakato@gmail.com', numberOfUpVotes:1300 ,numberOfDownVotes:330},
    {names:'John Githaiga', quote:"What you do on immigration policy, what you do on education policy, what you do on tax, regulatory, and energy policy, all connects together - and will be based on a simple determination about what will make life better in America for American citizens.", email:'john@gmail.com', numberOfUpVotes:1300 ,numberOfDownVotes:330},
    {names:'Meshak Victor', quote:"Simplicity is complex. It's never simple to keep things simple. Simple solutions require the most advanced thinking.", email:'meshak@gmail.com', numberOfUpVotes:1300 ,numberOfDownVotes:330}
  ]
 
  

  addNewQuote(quote){
    this.quotes.unshift(quote)
  }
  
  quoteDelete(quote){
    let toDelete = confirm(`Are you sure you want to delete this quote?`)
    if (toDelete){
      this.quotes.splice(quote.quote,1);
    }
  }
  
  constructor() {}

  ngOnInit(): void {
  }

}
