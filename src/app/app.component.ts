import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  // selector: 'my-element',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output('button-click') buttonClick = new EventEmitter();
  @Input('header-text') headerText;
  title = 'webcomp';
  onclick() {
    this.buttonClick.emit();
  }
}
