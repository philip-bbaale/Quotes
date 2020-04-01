import { Component, OnInit, Input } from '@angular/core';
import { QuoteComponent } from 'src/app/components/quote/quote.component'

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  /*numberOfUpVote:any =0;
  numberOfDownVote:any=0;*/

  /*numberOfUpVotes = QuoteComponent.
  numberOfDownVotes: any = QuoteComponent.quotes;
 
  likeButtonClick(numberOfDownVote){
    this.numberOfUpVotes++;
  }
  dislikeButtonClick(){
    this.numberOfDownVotes++;
  }*/

  constructor() { }

  ngOnInit(): void {
  }

}
