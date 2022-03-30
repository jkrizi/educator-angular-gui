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
