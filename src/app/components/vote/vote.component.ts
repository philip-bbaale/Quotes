import { Component, OnInit } from '@angular/core';
import { QuoteComponent } from 'src/app/components/quote/quote.component'

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  numberOfUpVote:number =0;
  numberOfDownVote:number=0;
 
  likeButtonClick(){
    this.numberOfUpVote++;
  }
  dislikeButtonClick(){
    this.numberOfDownVote++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
