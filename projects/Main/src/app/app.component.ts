import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { fromEvent, interval, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'Main';
  @ViewChild('container', { static: true }) container;
  ngAfterViewInit() {
    setTimeout(() => {
      const popupEl: NgElement & WithProperties<{ headerText: string }> = document.createElement('my-element') as any;
      const second: NgElement & WithProperties<{ text: string }> = document.createElement('second-element') as any;
      // Listen to the close event
      fromEvent(popupEl, 'button-click').subscribe(d => console.log('first click'));

      interval(1000).subscribe(d => popupEl.headerText = new Date().toLocaleTimeString())
      popupEl.headerText = "Text";
      second.text = "second text :D";
      second.classList.add('second-element');
      second.style.color = 'red';
      // Add to the DOM
      this.container.nativeElement.appendChild(popupEl);
      document.body.appendChild(second);
    }, 0);
  }
}
