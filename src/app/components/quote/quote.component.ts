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
    new Quotes('Bbaale Philip','To be young is to be ausome.','namugera.philip@gmail.com',1300,330,new Date(2020, 3, 1, 17, 23, 42, 11)),
    new Quotes('Benita Kafrika','You can search throughout the entire universe for someone who is more deserving of your love and affection than you are yourself, and that person is not to be found anywhere. You yourself, as much as anybody in the entire universe deserve your love and affection.','bkafrika@gmail.com',800,40,new Date(2020, 2, 2, 17, 23, 42, 11)),
    new Quotes('JudeMartin',"Issues are never simple. One thing I'm proud of is that very rarely will you hear me simplify the issues.",'judebbaale@gmail.com',78,9,new Date(2020, 1, 4, 17, 23, 42, 11)),
    new Quotes('Mackenzie', "It would be so simple to allow children, when tired of sitting, to rise, and when tired of writing, to desist, and then their bones would not be twisted.", 'mackenzie@gmail.com',450 ,330,new Date(2020, 2, 4, 17, 23, 42, 11)),
    new Quotes('Patricia',"Tramping is too easy with all this money. My days were more exciting when I was penniless and had to forage around for my next meal... I've decided that I'm going to live this life for some time to come. The freedom and simple beauty of it is just too good to pass up.",'patricia@gmail.com', 467 ,87, new Date(2020, 4, 4, 17, 23, 42, 11)),
    new Quotes('Rodney Kaneene',"If you want to be successful, it's just this simple. Know what you are doing. Love what you are doing. And believe in what you are doing.",'rodney@gmail.com', 300 ,330, new Date(2020, 2, 4, 17, 23, 42, 11)),
    new Quotes('Sir Faith',"All the great things are simple, and many can be expressed in a single word: freedom, justice, honor, duty, mercy, hope.",'faith@gmail.com', 90 ,48, new Date(2019, 11, 4, 17, 23, 42, 11)),
    new Quotes('Nakato', "It would be so simple to allow children, when tired of sitting, to rise, and when tired of writing, to desist, and then their bones would not be twisted.", 'nakato@gmail.com',940 ,23, new Date(2019, 12, 4, 17, 23, 42, 11)),
    new Quotes('John Githaiga',"What you do on immigration policy, what you do on education policy, what you do on tax, regulatory, and energy policy, all connects together - and will be based on a simple determination about what will make life better in America for American citizens.", 'john@gmail.com', 69 ,20, new Date(2019, 4, 4, 17, 23, 42, 11)),
    new Quotes('Meshak Victor', "Simplicity is complex. It's never simple to keep things simple. Simple solutions require the most advanced thinking.",'meshak@gmail.com', 400 ,30, new Date(2019, 12, 4, 17, 23, 42, 11)),
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
  
  likeButtonClick(i){
    this.quotes[i].numberOfUpVotes++;
  }
  dislikeButtonClick(i){
    this.quotes[i].numberOfDownVotes++;
  }

  constructor() {}

  ngOnInit(): void {
  }

}
