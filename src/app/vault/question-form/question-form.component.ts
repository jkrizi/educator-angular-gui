import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {

  @Input()
  formQuestion: string;

  @Output()
  finishedEditing = new EventEmitter();

  public taughtSubjects: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public closeForm() {
    this.finishedEditing.emit();
  }

}
