import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionaireDetailsComponent } from './components/questionaire-details/questionaire-details.component';
import { QuestionComponent } from './components/question/question.component';

const routes: Routes = [
  {
    path: '',
    component: QuestionaireDetailsComponent
  },
  {
    path: 'questions',
    component: QuestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
