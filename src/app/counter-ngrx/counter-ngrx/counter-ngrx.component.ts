import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { incrementByValue } from '../counter.action';

@Component({
  selector: 'app-counter-ngrx',
  templateUrl: './counter-ngrx.component.html',
  styleUrls: ['./counter-ngrx.component.css']
})
export class CounterNgrxComponent implements OnInit {

  incrementByValue = 0;
  size = 1;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

  incrementBy() {
    this.store.dispatch(incrementByValue({ value: this.incrementByValue }));
  }

}
