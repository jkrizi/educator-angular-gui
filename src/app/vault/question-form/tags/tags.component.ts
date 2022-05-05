import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input() listedTags: string[];
  @Input() knownTags: string[];

  @Output() noTag = new EventEmitter();
  @Output() firstTag = new EventEmitter();

  freshTag: string;
  availableTags: string[];

  constructor() { }

  ngOnInit(): void {
    this.availableTags = this.knownTags.filter((tag: string) => this.listedTags.indexOf(tag) < 0);
  }

  deleteTag(tagIndex: number) {
    this.listedTags.splice(tagIndex, 1);
    if (this.listedTags.length === 0) {
      this.noTag.emit();
    }
  }

  addTag() {;
    if (!this.freshTag || this.listedTags.find(tag => tag === this.freshTag) !== undefined) {
      return;
    }
    this.listedTags.push(this.freshTag);
    this.freshTag = '';
    if (this.listedTags.length === 1) {
      this.firstTag.emit();
    }
  }
}
