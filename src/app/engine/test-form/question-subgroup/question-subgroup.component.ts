import { Component, Output, Input, EventEmitter } from '@angular/core';
import { QuestionSlice } from 'src/app/models/question.model';
import { QuestionService } from 'src/app/service/question.service';
import { TagService } from 'src/app/service/tag.service';

@Component({
  selector: 'app-question-subgroup',
  templateUrl: './question-subgroup.component.html',
  styleUrls: ['./question-subgroup.component.css'],
})
export class QuestionSubgroupComponent {

  selectedTags: string[] = [];
  questionPie: QuestionSlice[] = [];
  questionPieAggregate: {maxCount: number, difficulty: number};
  singledOutQuestions: [];

  showHistogram: boolean;

  @Input() subjectTags: string[];

  @Output() dirtyGroup = new EventEmitter();
  @Output() cleanGroup = new EventEmitter<number>();

  constructor(private questionService: QuestionService) {
    this.questionPie = this.questionService.getQuestionPie(this.selectedTags);
    this.questionPieAggregate = this.aggregateQuestionPie();
  }

  openModal() {}

  addAnotherSubgroup() {
    this.dirtyGroup.emit();
  }

  removeThisSubgroup() {
    this.cleanGroup.emit();
  }

  toggleHistogram() {
    this.showHistogram = !this.showHistogram;
  }

  aggregateQuestionPie(): {maxCount: number, difficulty: number} {
    let maxCountSum = 0;
    let difficultySum = 0;
    this.questionPie.forEach(
      (slice) => {
        maxCountSum + slice.maxCount;
        difficultySum + slice.maxCount * slice.difficulty;
      }
    );
    return {maxCount: maxCountSum, difficulty: difficultySum};
  }
}
