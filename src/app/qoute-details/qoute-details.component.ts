import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Qoute } from "../qoutes";
@Component({
  selector: "app-qoute-details",
  templateUrl: "./qoute-details.component.html",
  styleUrls: ["./qoute-details.component.css"]
})
export class QouteDetailsComponent implements OnInit {

  @Input() qoutes: Qoute;
 
  @Output() isComplete = new EventEmitter<boolean>();

  qouteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  numberoflikes : number=0
  numberofdislikes : number=0
     likebuttonclick(){
     this.numberoflikes++;
}
  dislikebuttonclick(){
  this.numberofdislikes++;
}

  constructor() {
    // this.votes = 0;
  }

  ngOnInit() {}
}
