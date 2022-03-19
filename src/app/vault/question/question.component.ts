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

  @Output()
  triggerEdit = new EventEmitter();

  @Output()
  triggerDelete = new EventEmitter();

  expand: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  edit() {
    this.triggerEdit.emit();
  }

  delete() {
    this.triggerDelete.emit();
  }
}
