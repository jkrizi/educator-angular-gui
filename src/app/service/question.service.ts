import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Question, QuestionSlice} from "../models/question.model";
import {catchError, Observable} from "rxjs";
import {HttpService} from "./http.service";

@Injectable({providedIn: 'root'})
export class QuestionService extends HttpService {

  constructor(private http: HttpClient) {
    super();
  }

  saveQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>("http://localhost:8080/question/save", question)
      .pipe(catchError(this.handleError));
  }

  getQuestionPie(tags: string[]): QuestionSlice[] {
    let questionPie: QuestionSlice[] = [];
    questionPie.push(new QuestionSlice(10, 20));
    questionPie.push(new QuestionSlice(8, 3));
    questionPie.push(new QuestionSlice(5, 0));
    return questionPie;
  }
}
