import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './components/question/question.component';
import { InputRadioControlComponent } from './components/input-radio-control/input-radio-control.component';
import { InputCheckboxControlComponent } from './components/input-checkbox-control/input-checkbox-control.component';
import { QuestionaireDetailsComponent } from './components/questionaire-details/questionaire-details.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    InputRadioControlComponent,
    InputCheckboxControlComponent,
    QuestionaireDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
