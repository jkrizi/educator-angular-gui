import {Answer} from "./answer.model";

export class Question {

  id: string;
  subject: string;
  title: string;
  tags: string[] = [];
  difficulty: number;
  assignment: string;
  answers: Answer[] = [];
}

export class QuestionSlice {

  constructor(difficulty: number, maxCount: number) {
    this.difficulty = difficulty;
    this.maxCount = maxCount;
    this.count = 0;
  }

  difficulty: number;
  maxCount: number;
  count: number;
}
