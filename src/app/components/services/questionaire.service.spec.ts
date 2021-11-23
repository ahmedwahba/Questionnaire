import { TestBed } from '@angular/core/testing';

import { QuestionaireService } from './questionaire.service';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('QuestionaireService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule,
      HttpClientTestingModule,
    ],
    providers: [QuestionaireService]
  }));

  it('should be created', () => {
    const service: QuestionaireService = TestBed.get(QuestionaireService);
    expect(service).toBeTruthy();
   });

  it('should have getData function', () => {
    const service: QuestionaireService = TestBed.get(QuestionaireService);
    expect(service.loadQuestionaireData).toBeTruthy();
   });

});
