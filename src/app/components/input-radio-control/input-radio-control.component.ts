import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-radio-control',
  templateUrl: './input-radio-control.component.html',
  styleUrls: ['./input-radio-control.component.css']
})
export class InputRadioControlComponent {

  @Input() value: string;
  @Input() name: string;
  @Input() id: string;
  @Input() checked = false;
  @Input() label: string;

  @Output() itemClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  handleChange(): void {
    this.itemClick.emit(this.value);
  }

}
