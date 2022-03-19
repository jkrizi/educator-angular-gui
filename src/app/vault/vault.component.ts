import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-vault',
  templateUrl: './vault.component.html',
  styleUrls: ['./vault.component.css']
})
export class VaultComponent implements OnInit {

  isEditing: boolean = false;
  openedQuestion: string = '';

  questions: string[] = ["dummy1", "dummy2"];

  constructor() { }

  ngOnInit(): void {
  }

  isSelected (question: string) {
    return this.openedQuestion === question;
  }

  createQuestion() {
    this.openEditor("new");
  }

  editQuestion(question: string) {
    this.openEditor(question);
  }

  private openEditor(question: string) {
    this.isEditing = true;
    this.openedQuestion = question;
  }

  closeEditor() {
    this.isEditing = false;
  }
}
