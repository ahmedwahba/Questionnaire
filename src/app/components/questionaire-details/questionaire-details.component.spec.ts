import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { InputCheckboxControlComponent } from '../input-checkbox-control/input-checkbox-control.component';
import { InputRadioControlComponent } from '../input-radio-control/input-radio-control.component';
import { QuestionComponent } from '../question/question.component';

import { QuestionaireDetailsComponent } from './questionaire-details.component';

describe('QuestionaireDetailsComponent', () => {
  let component: QuestionaireDetailsComponent;
  let fixture: ComponentFixture<QuestionaireDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        QuestionaireDetailsComponent,
        QuestionComponent,
        InputRadioControlComponent,
        InputCheckboxControlComponent,
      ],
      imports: [
        AppRoutingModule,
        FormsModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionaireDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
