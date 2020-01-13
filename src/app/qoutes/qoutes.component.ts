import { Component, OnInit } from '@angular/core';
import{ Qoutes} from '../qoutes'
@Component({
  selector: 'app-qoutes',
  templateUrl: './qoutes.component.html',
  styleUrls: ['./qoutes.component.css']
})
export class QoutesComponent implements OnInit {


  quotes=[
    new Qoute(1, 'To Love is to care.', 'tressy', "Teresa Clerk"),
    new Qoute(2,'When you cannot find the sunshine be the sunshine', 'Bliss', "Maccnon Law"),
    new Qoute(3, 'The grass is greener when you water it', 'Liz', "Faking Hay")
  ];

  addNewQoute(quote){
    let qouteLength=this.quotes,length;
    qouteLength.id=qouteLength+1;
    this.quotes.unshift(quote)

  }

  toggleDetails(index){
    this.quotes[index].showAuthor =!this.quotes[index].showAuthor;
   }


  constructor() { }

  ngOnInit() {
  }

}
