import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRadioControlComponent } from './input-radio-control.component';

describe('InputRadioControlComponent', () => {
  let component: InputRadioControlComponent;
  let fixture: ComponentFixture<InputRadioControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputRadioControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputRadioControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
