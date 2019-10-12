import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  public parentMessage = 'Write code everyday';

  public childReply: string;
  constructor() { }

  ngOnInit() {
  }

  public parentCatchEvent($event) {
    console.log('parent catch event');
    this.childReply = $event;
  }
}
