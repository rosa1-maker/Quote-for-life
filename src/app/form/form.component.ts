import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Qoute } from '../qoutes'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
// export class FormComponent implements OnInit {
// newQuote=new Qoutes(0,"","","");
// @Output()addQuote=new EventEmitter<Qoutes>();

// submitQuote(){
//   this.addQuote.emit(this.newQuote)
// }
//   constructor() { }

//   ngOnInit() {
//   }

// }

export class FormComponent implements OnInit {

  newQoute = new Qoute(0,"","","",new Date());
@Output() addQoute = new EventEmitter<Qoute>();

  submitQoute(){
this.addQoute.emit(this.newQoute);
  }
  constructor() { }

  ngOnInit() {
  }
}
