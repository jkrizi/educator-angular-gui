import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Answer} from "../../../models/answer.model";

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Output() addAnswer = new EventEmitter<Answer>();

  newAnswer: Answer = new Answer();

  constructor() { }

  ngOnInit(): void {
  }

  emitAnswer() {
    this.addAnswer.emit(this.newAnswer);
    this.newAnswer = new Answer();
  }
}
