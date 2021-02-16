import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SecondComponent } from './second.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  schemas: [],
  entryComponents: [AppComponent, SecondComponent],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const Elm = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('my-element', Elm);
    const Second = createCustomElement(SecondComponent, { injector: this.injector });
    customElements.define('second-element', Second);
    window['elements'] = { loaded: true };
  }
}
