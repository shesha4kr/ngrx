import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {

  @Output() onIncrement = new EventEmitter<void>();
  @Output() onDecrement = new EventEmitter<void>();
  @Output() onReset = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.onIncrement.emit();
  }

  decrement() {
    this.onDecrement.emit();
  }

  reset() {
    this.onReset.emit();
  }


}
