import { Component, OnInit } from "@angular/core";
import { Qoute } from "../qoutes";

@Component({
  selector: "app-qoutes",
  templateUrl: "./qoutes.component.html",
  styleUrls: ["./qoutes.component.css"]
})
export class QouteComponent implements OnInit {
  qoutes: Qoute[] = [
    new Qoute(
      1,
      "To Love is to care.",
      "tressy",
      "Teresa Clerk",
      new Date(2020, 1, 13)
    ),


    new Qoute(
      2,
      "When you cannot find the sunshine be the sunshine",
      "Bliss",
      "Maccnon Law",
      new Date(2012, 1, 13)
    ),


    
    new Qoute(
      3,
      "The grass is greener when you water it",
      "Liz",
      "Faking Hay",
      new Date(2020, 1, 23)
    )
  ];

  addNewQoute(qoutes: Qoute) {
    let qouteLength = this.qoutes,
      length: any;
    this.qoutes= qouteLength;
    qoutes.completeDate=new Date (qoutes.completeDate)
    this.qoutes.push(qoutes)
  }

  toggleDetails(index: string | number) {
    this.qoutes[index].showAuthor = !this.qoutes[index].showAuthor;
  }

  deleteQoute(isComplete: any, index: number) {
    if (isComplete) {
      let toDelete = confirm(
        "Sure you want to delete ${this.quotes[index].name}?"
      );

      if (toDelete) {
        this.qoutes.splice(index, 1);
      }
    }
  }
  completeQoute(isComplete: any, index: number) {
    if (isComplete) {
      this.qoutes.splice(index, 1);
    }
  }
  constructor() {}

  ngOnInit() {}
}
