import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionaireService {

  constructor(private httpClient: HttpClient) { }

  loadQuestionaireData(): Observable<any> {
    return this.httpClient.get("assets/json/questionnaire.json");
  }

}
