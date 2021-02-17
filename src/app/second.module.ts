import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { SecondComponent } from './second.component';

@NgModule({
  declarations: [
    SecondComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  schemas: [],
  entryComponents: [SecondComponent],
  bootstrap: []
})
export class SecondModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const Second = createCustomElement(SecondComponent, { injector: this.injector });
    customElements.define('second-element', Second);
    window['elements'] = { loaded: true };
  }
}
