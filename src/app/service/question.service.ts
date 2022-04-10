import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Question} from "../models/question.model";
import {catchError, Observable} from "rxjs";
import {AbstractHttpService} from "./abstract-http.service";

@Injectable({providedIn: 'root'})
export class QuestionService extends AbstractHttpService {

  constructor(private http: HttpClient) {
    super();
  }

  saveQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>("http://localhost:8080/question/save", question)
      .pipe(catchError(this.handleError));
  }
}
