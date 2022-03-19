import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-vault',
  templateUrl: './vault.component.html',
  styleUrls: ['./vault.component.css']
})
export class VaultComponent implements OnInit {

  questions: string[] = ["dummy1", "dummy2"];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  createQuestion() {
    this.router.navigate(["editor", "some"], {relativeTo: this.route, queryParams: {new: true}});
  }

  editQuestion(question: string) {
    this.router.navigate(["editor", question], {relativeTo: this.route, queryParams: {new: false}});
  }

  deleteQuestion(question: string) {

  }
}
