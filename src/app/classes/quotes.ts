import { VoteComponent } from '../components/vote/vote.component'


export class Quotes {
    
    /*public names:string;
    public quote:string;
    public email:string;
    public numberOfUpVotes:number=0;
    public numberOfDownVotes:number=0;
    public timing: Date;*/

    constructor(public names:string, public quote:string, public email:string, public numberOfUpVotes:number=0, public numberOfDownVotes:number=0,public timing: Date){

    }
}
