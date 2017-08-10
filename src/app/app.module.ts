import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule, Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { MaterializeModule } from 'angular2-materialize';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

// import { SharedModule } from 'benow';

import { AppComponent } from './app.component';

export function HttpFactory(http: Http) {
  return new TranslateStaticLoader(http, '/assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterializeModule,
    // SharedModule.forRoot(),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: HttpFactory,
      deps: [Http]
    }),
    RouterModule.forRoot([
      {
        path: 'events',
        component: AppComponent
      },
      {
        path: 'events/:eventid',
        component: AppComponent
      },
      {
        path: '',
        redirectTo: 'events',
        pathMatch: 'full'
      },
    ], { useHash: true })
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
