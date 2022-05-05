import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Question} from "../../models/question.model";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Answer} from "../../models/answer.model";
import { SubjectService } from 'src/app/service/subject.service';
import { TagService } from 'src/app/service/tag.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnChanges {

  taughtSubjects: string[];
  knownTags: string[];

  usedTags: string[] = [];

  @Input() question: Question;
  @Output() closeEditor = new EventEmitter();
  @Output() saveQuestion = new EventEmitter<Question>();

  form: FormGroup;

  constructor(private subjectService: SubjectService, private tagService: TagService) {
    this.taughtSubjects = subjectService.getTaughtSubjects();
    this.knownTags = tagService.getKnownTags();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.question = changes.question.currentValue;
    this.fillForm();
  }

  getControls(form: FormGroup, arrayName: string): FormGroup[] {
    return (form.get(arrayName) as FormArray).controls.map(abstractControl => <FormGroup>abstractControl);
  }

  closeForm() {
    this.form.reset();
    this.closeEditor.emit();
  }

  submitForm() {
    this.saveQuestion.emit(this.form.value);
    this.closeForm();
  }

  deleteAnswer(answerIndex: number) {
    this.formAnswers.removeAt(answerIndex);
  }

  addAnswer(newAnswer: Answer) {
    this.formAnswers.push(QuestionFormComponent.createAnswerGroup(newAnswer))
  }

  private fillForm() {
    this.usedTags = Object.assign([], this.question.tags);

    this.form = new FormGroup({
      subject: new FormControl(this.question.subject, [Validators.required]),
      tags: new FormControl(this.usedTags),
      difficulty: new FormControl(this.question.difficulty),
      title: new FormControl(this.question.title),
      assignment: new FormControl(this.question.assignment),
      answers: new FormArray(this.question.answers.map(
        (answer: Answer) => QuestionFormComponent.createAnswerGroup(answer)
      ))
    });
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
