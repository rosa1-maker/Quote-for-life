import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Qoutes } from '../qoutes'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
newQuote=new Qoutes(0,"","","");
@Output()addQuote=new EventEmitter<Qoutes>();

submitQuote(){
  this.addQuote.emit(this.newQuote)
}
  constructor() { }

  ngOnInit() {
  }

}
