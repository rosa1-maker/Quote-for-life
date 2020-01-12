import { Component, OnInit, Input } from '@angular/core';
import { Qoutes } from '../qoutes'
@Component({
  selector: 'app-qoute-details',
  templateUrl: './qoute-details.component.html',
  styleUrls: ['./qoute-details.component.css']
})
export class QouteDetailsComponent implements OnInit {

  votes: number;

  @Input () quote:Qoutes;
  vote = 0;

  constructor() {
    this.votes = 0;
   }

   likeVote(): boolean{
     this.votes +=1;
     return false;
   }

   dislikeVote(): boolean{
    this.votes -=1;
    return false;
  }
  ngOnInit() {

  }

}
