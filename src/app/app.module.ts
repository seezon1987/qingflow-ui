import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QfUiModule } from '../../lib/qf-ui.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    QfUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
