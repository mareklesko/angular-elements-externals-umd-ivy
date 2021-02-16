import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  // selector: 'my-element',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output('button-click') buttonClick = new EventEmitter();
  title = 'webcomp';
  onclick() {
    this.buttonClick.emit();
  }
}
