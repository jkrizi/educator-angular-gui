import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input() listedTags: string[];
  @Input() knownTags: string[];

  freshTag: string;

  availableTags: string[];

  constructor() { }

  ngOnInit(): void {
    this.availableTags = this.knownTags.filter((tag: string) => this.listedTags.indexOf(tag) < 0);
  }

  deleteTag(tagIndex: number) {
    this.listedTags.splice(tagIndex, 1);
  }

  addTag() {;
    if (this.freshTag !== "") {
      this.listedTags.push(this.freshTag);
      this.freshTag = "";
    }
  }
}
