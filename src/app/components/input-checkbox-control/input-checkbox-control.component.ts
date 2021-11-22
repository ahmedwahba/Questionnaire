import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-checkbox-control',
  templateUrl: './input-checkbox-control.component.html',
  styleUrls: ['./input-checkbox-control.component.css']
})
export class InputCheckboxControlComponent {

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
