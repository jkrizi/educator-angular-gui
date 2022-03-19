import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {

  public taughtSubjects: string[] = [];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams: Params) => console.log(queryParams["new"]));
    this.route.params.subscribe((params: Params) => console.log(params["id"]));
  }

  public closeForm() {
    this.router.navigate(["/vault"]);
  }

}
