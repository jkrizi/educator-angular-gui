import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {trigger} from "@angular/animations";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input()
  question: string;

  @Input()
  isSelected: boolean;

  @Output()
  triggerEdit = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  select() {
    this.isSelected = true;
    this.triggerEdit.emit();
  }
}
