import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() childInput: string;
  @Output() childOutputEvent = new EventEmitter<string>();
  public childReply = 'OK Fine!';

  constructor() { }

  ngOnInit() {
  }

  public childEmitOutput(): void {
    console.log('child emit output');
    this.childOutputEvent.emit(this.childReply);
  }

}
