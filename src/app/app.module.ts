import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { SecondComponent } from './second.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  schemas: [],
  entryComponents: [AppComponent],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const Elm = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('my-element', Elm);
    window['elements'] = { loaded: true };
  }
}
