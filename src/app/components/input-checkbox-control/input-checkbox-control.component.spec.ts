import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCheckboxControlComponent } from './input-checkbox-control.component';

describe('InputCheckboxControlComponent', () => {
  let component: InputCheckboxControlComponent;
  let fixture: ComponentFixture<InputCheckboxControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCheckboxControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCheckboxControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
