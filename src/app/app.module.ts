import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { QuestionComponent } from './components/question/question.component';
import { InputRadioControlComponent } from './components/input-radio-control/input-radio-control.component';
import { InputCheckboxControlComponent } from './components/input-checkbox-control/input-checkbox-control.component';
import { QuestionaireDetailsComponent } from './components/questionaire-details/questionaire-details.component';
import { QuestionaireService } from './components/services/questionaire.service';
import { FormsModule } from '@angular/forms';

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
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    QuestionaireService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
