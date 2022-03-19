import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from "../../models/question.model";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question;
  @Input() isSelected: boolean;

  @Output() triggerEdit = new EventEmitter();

  correctAnswersCount: number;

  constructor() {
  }

  ngOnInit(): void {
    this.correctAnswersCount = this.question.answers.filter(answer => answer.isCorrect).length;
  }

  select() {
    this.isSelected = true;
    this.triggerEdit.emit();
  }
}
