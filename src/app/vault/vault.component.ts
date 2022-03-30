import { Component, OnInit } from '@angular/core';
import {Question} from "../models/question.model";

@Component({
  selector: 'app-vault',
  templateUrl: './vault.component.html',
  styleUrls: ['./vault.component.css']
})
export class VaultComponent implements OnInit {

  EMPTY_QUESTION: Question = new Question();

  isEditing: boolean = false;
  openedQuestion: Question;

  questions: Question[] = [
    {id: '1', subject: 'Matematika', title: 'Derivace zakladni', assignment: 'Zadani1', tags: ['Test1'], difficulty: 5, answers: []},
    {id: '2', subject: 'Fyzika', title: 'Gravitace vzorec', assignment: 'Zadani2', tags: ['Zaklady', 'Vzorce'], difficulty: 3, answers: [{id: '1', isCorrect: true, text: 'ANO'}, {id: '2', isCorrect: false, text: 'NE'}]},
    {id: '3', subject: 'Chemie', title: 'Draslikova reakce', assignment: 'Zadani3', tags: ['Neorganicka', '1. pololeti', '3. rocnik'], difficulty: 10, answers: [{id: '3', isCorrect: false, text: 'Odpoved1'}, {id: '4', isCorrect: false, text: 'Odpoved2'}, {id: '5', isCorrect: true, text: 'Odpoved3'}, {id: '6', isCorrect: false, text: 'Odpoved4'},]}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  isSelected (question: Question) {
    if (!this.openedQuestion) {
      return false;
    }

    if (!question) {
      return false;
    }

    return this.openedQuestion.id === question.id;
  }

  createQuestion() {
    this.openEditor(new Question());
  }

  editQuestion(question: Question) {
    this.openEditor(question);
  }

  private openEditor(question: Question) {
    this.openedQuestion = question;
    this.isEditing = true;
  }

  closeEditor() {
    this.openedQuestion = null;
    this.isEditing = false;
  }
}
