import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionaireDetailsComponent } from './components/questionaire-details/questionaire-details.component';
import { QuestionComponent } from './components/question/question.component';
import { QuestionaireResolver } from './resolvers/questionaire.resolver';

const routes: Routes = [
  {
    path: '',
    component: QuestionaireDetailsComponent,
    resolve: {
      data: QuestionaireResolver,
    }
  },
  {
    path: 'questions',
    component: QuestionComponent,
    resolve: {
      data: QuestionaireResolver,
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
