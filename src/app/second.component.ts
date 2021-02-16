import { Component, Input } from '@angular/core';

@Component({
    // selector: 'my-element',
    template: `<div>{{text}}</div>`
})
export class SecondComponent {
    @Input('text') text;
}
