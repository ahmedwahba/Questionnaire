import { Question } from './../../models/questionaire.model';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { take } from 'rxjs/operators';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { InputCheckboxControlComponent } from '../input-checkbox-control/input-checkbox-control.component';
import { InputRadioControlComponent } from '../input-radio-control/input-radio-control.component';
import { QuestionaireDetailsComponent } from '../questionaire-details/questionaire-details.component';

import { QuestionComponent } from './question.component';

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;
  let questions: Question[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InputRadioControlComponent,
        InputCheckboxControlComponent,
        QuestionComponent,
        QuestionaireDetailsComponent,
      ],
      imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should questions loaded', () => {
    component.route.data.pipe(take(1)).subscribe((res) => {
      if (res.data) {
        component.questions = res.data.questions;
        questions = component.questions;
        expect(component.questions).toBeTruthy();
      }
    });
  });

  it('should get required questions count', () => {
    if (questions && questions.length > 0) {
      const requiredCount = questions.filter(
        (question) => question.required === true
      ).length;
      expect(requiredCount).toBeTruthy();
    }
  });
});
