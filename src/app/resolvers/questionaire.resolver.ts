import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { QuestionaireService } from '../components/services/questionaire.service';
import { Questionaire } from './../models/questionaire.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionaireResolver implements Resolve<Questionaire> {
  constructor(public questionaireService: QuestionaireService) {
  }

  resolve(): Observable<Questionaire> {
    return this.questionaireService.loadQuestionaireData().pipe(
      map(res => res.questionnaire)
    );
  }
}
