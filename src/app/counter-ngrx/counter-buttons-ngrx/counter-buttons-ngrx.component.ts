import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrementCounter, incrementCounter, resetCounter } from '../counter.action';
import { CounterState } from '../counter.state';

@Component({
  selector: 'app-counter-buttons-ngrx',
  templateUrl: './counter-buttons-ngrx.component.html',
  styleUrls: ['./counter-buttons-ngrx.component.css']
})
export class CounterButtonsNgrxComponent implements OnInit {

  constructor(private store: Store<{ nanana: CounterState }>) { }

  ngOnInit(): void {
  }

  increment() {
    this.store.dispatch(incrementCounter());
  }

  decrement() {
    this.store.dispatch(decrementCounter());
  }

  reset() {
    this.store.dispatch(resetCounter());
  }

}
