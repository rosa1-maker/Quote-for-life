import { Component, OnInit } from '@angular/core';
import{ Qoutes} from '../qoutes'
@Component({
  selector: 'app-qoutes',
  templateUrl: './qoutes.component.html',
  styleUrls: ['./qoutes.component.css']
})
export class QoutesComponent implements OnInit {


  quotes=[
    new Qoutes(1, 'To Love is to care.', 'tressy', "Teresa Clerk"),
    new Qoutes(2,'When you cannot find the sunshine be the sunshine', 'Bliss', "Maccnon Law"),
    new Qoutes(3, 'The grass is greener when you water it', 'Liz', "Faking Hay")
  ];

  addNewQoutes(quotes){
    let qoutesLength=this.quotes,length;
    quotes.id=qoutesLength;
    this.quotes.unshift(quotes)

  }

  toggleDetails(index){
    this.quotes[index].showAuthor =!this.quotes[index].showAuthor;
   }


  constructor() { }

  ngOnInit() {
  }

}
