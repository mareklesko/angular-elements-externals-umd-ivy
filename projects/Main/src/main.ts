import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { interval } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

fetch('assets/config.json')
  .then(x => x.json())
  .then(x => {
    const loading = document.createElement('div');
    if (!x.length) {
      runApplication();
    } else {
      loading.innerText = "Loading external elements...";
      document.body.appendChild(loading);
      const scripts = x;
      scripts.forEach(s => {
        const script = document.createElement('script');
        script.src = s;
        script.async = false;
        script.defer = false;
        document.getElementsByTagName('head')[0].appendChild(script);
      });
      const waiter = interval(100)
        .pipe(filter(() => (window as any).elements && (window as any).elements.loaded))
        .subscribe(() => {
          waiter.unsubscribe();
          document.body.removeChild(loading);
          runApplication();
        })
    }
  });

const runApplication = () => {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err))
}
