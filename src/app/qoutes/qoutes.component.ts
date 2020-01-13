import { Component, OnInit } from '@angular/core';
import{ Qoutes} from '../qoutes'

@Component({
  selector: 'app-qoutes',
  templateUrl: './qoutes.component.html',
  styleUrls: ['./qoutes.component.css']
})
export class QoutesComponent implements OnInit {


  quotes: Qoutes[] =[
    new Qoutes(1, 'To Love is to care.', 'tressy', 'Teresa Clerk', new Date(2020,1,13)),
    new Qoutes(2,'When you cannot find the sunshine be the sunshine', 'Bliss', 'Maccnon Law', new Date(2012,1,13)),
    new Qoutes(3, 'The grass is greener when you water it', 'Liz', 'Faking Hay', new Date(2020,1,23))
    
  ];

  addNewQoutes(quote){
    let qoutesLength=this.quotes,length;
    quote.id=qoutesLength;
    this.quotes.unshift(quote)

  }

  toggleDetails(index){
    this.quotes[index].showAuthor =!this.quotes[index].showAuthor;
   }


  deletQoutes(isComplete, index){
    if(isComplete) {
      let toDelete = confirm('Sure you want to delete ${this.quotes[index].name}?')
      
      if (toDelete) {
        this.quotes.splice(index,1)
      }
    }

  }
  completeQoute(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
