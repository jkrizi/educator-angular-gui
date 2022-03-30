import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from "../../models/question.model";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Answer} from "../../models/answer.model";

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {

  taughtSubjects: string[] = ['', 'Matematika', 'Fyzika', 'Chemie'];

  @Input() question: Question;
  @Output() finishedEditing = new EventEmitter();

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      subject: new FormControl(this.question.subject, [Validators.required]),
      tags: new FormControl(this.question.tags),
      difficulty: new FormControl(this.question.difficulty),
      title: new FormControl(this.question.title),
      assignment: new FormControl(this.question.assignment),
      answers: new FormArray(this.question.answers.map(
        (answer: Answer) => QuestionFormComponent.createAnswerGroup(answer)
      ))
    });
  }

  getControls(form: FormGroup, arrayName: string): FormGroup[] {
    return (form.get(arrayName) as FormArray).controls.map(abstractControl => <FormGroup>abstractControl);
  }

  public closeForm() {
    console.log(this.question);
    this.finishedEditing.emit();
  }

  submitForm() {
    console.log(this.question);
    this.form.reset()
  }

  deleteAnswer(answerIndex: number) {
    this.formAnswers.removeAt(answerIndex);
  }

  addAnswer(newAnswer: Answer) {
    this.formAnswers.push(QuestionFormComponent.createAnswerGroup(newAnswer))
  }

  private get formAnswers(): FormArray {
    return (<FormArray>this.form.get('answers'));
  }

  private static createAnswerGroup(answer: Answer): FormGroup {
    return new FormGroup({
      isCorrect: new FormControl(answer.isCorrect),
      text: new FormControl(answer.text)
    })
  }
}
