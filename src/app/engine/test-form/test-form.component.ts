import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import { SubjectService } from 'src/app/service/subject.service';
import { TagService } from 'src/app/service/tag.service';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent {

  testTemplateForm: FormGroup;

  taughtSubjects: string[] = [];
  subjectTags: string[] = [];

  subgroupsInUse: {id: number}[] = [];

  subgroupId: number = 0;

  constructor(private subjectService: SubjectService, private tagService: TagService) {
    this.subjectTags = this.tagService.getKnownTags();
    this.taughtSubjects = this.subjectService.getTaughtSubjects();
    this.subgroupsInUse.push({id: this.subgroupId});
    this.fillForm();
    console.log(this.subgroupsInUse)
  }

  private fillForm() {
    this.testTemplateForm = new FormGroup({
      subject: new FormControl("")
    });
  }

  addSubgroup() {
    this.subgroupId = this.subgroupId + 1;
    this.subgroupsInUse.push({ id: this.subgroupId});
  }

  removeSubgroup(cleanSubgroupId: number) {
    let index = this.subgroupsInUse.findIndex(
      (subgroup) => (subgroup.id === cleanSubgroupId)
    );
    this.subgroupsInUse.splice(index, 1);
  }

}
