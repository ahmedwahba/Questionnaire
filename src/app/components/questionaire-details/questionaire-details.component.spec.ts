import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionaireDetailsComponent } from './questionaire-details.component';

describe('QuestionaireDetailsComponent', () => {
  let component: QuestionaireDetailsComponent;
  let fixture: ComponentFixture<QuestionaireDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionaireDetailsComponent ]
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
