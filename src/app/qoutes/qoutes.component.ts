import { Component, OnInit } from '@angular/core';
import{ Qoutes} from '../qoutes'

@Component({
  selector: 'app-qoutes',
  templateUrl: './qoutes.component.html',
  styleUrls: ['./qoutes.component.css']
})
export class QoutesComponent implements OnInit {


  qoutes: Qoutes[] =[
    new Qoutes(1, 'To Love is to care.', 'tressy', 'Teresa Clerk', new Date(2020,1,13)),
    new Qoutes(2,'When you cannot find the sunshine be the sunshine', 'Bliss', 'Maccnon Law', new Date(2012,1,13)),
    new Qoutes(3, 'The grass is greener when you water it', 'Liz', 'Faking Hay', new Date(2020,1,23))
    
  ];

  addNewQoutes(qoute){
    let qoutesLength=this.qoutes,length;
    qoute.id=qoutesLength;
    this.qoutes.unshift(qoute)

  }

  toggleDetails(index){
    this.qoutes[index].showAuthor =!this.qoutes[index].showAuthor;
   }


  deletQoutes(isComplete, index){
    if(isComplete) {
      let toDelete = confirm('Sure you want to delete ${this.quotes[index].name}?')
      
      if (toDelete) {
        this.qoutes.splice(index,1)
      }
    }

  }
  completeQoute(isComplete, index){
    if (isComplete) {
      this.qoutes.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
