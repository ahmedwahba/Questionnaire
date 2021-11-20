import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input-radio-control',
  templateUrl: './input-radio-control.component.html',
  styleUrls: ['./input-radio-control.component.css']
})
export class InputRadioControlComponent implements ControlValueAccessor, OnInit{

  @Input() value: string;
  @Input() name: string;
  @Input() id: string;
  @Input() checked = false;
  @Input() label: string;

  @Output() itemClick: EventEmitter<any> = new EventEmitter<any>();

  propagateChange = (_: any): any => { }

  constructor() { }

  writeValue (obj: any): void {
    if (obj !== undefined) {
      this.value = obj;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateChange = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
  }

  handleChange (): void {
    this.itemClick.emit(this.value);
  }

}
