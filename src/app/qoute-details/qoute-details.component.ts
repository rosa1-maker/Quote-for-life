import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Qoutes } from "../qoutes";
@Component({
  selector: "app-qoute-details",
  templateUrl: "./qoute-details.component.html",
  styleUrls: ["./qoute-details.component.css"]
})
export class QouteDetailsComponent implements OnInit {
  votes: number;

  @Input() qoutes: Qoutes;
  vote = 0;
  @Output() isComplete = new EventEmitter<boolean>();

  qouteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  numberoflikes: number = 0;
  likebuttonclick() {
    this.numberoflikes++;
  }
  numberofdislikes: number = 0;
  dislikebutttonclick() {
    this.numberofdislikes++;
  }

  constructor() {
    this.votes = 0;
  }

  ngOnInit() {}
}
