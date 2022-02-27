import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getCounter } from '../counter.selectors';
import { CounterState } from '../counter.state';

@Component({
  selector: 'app-counter-output-ngrx',
  templateUrl: './counter-output-ngrx.component.html',
  styleUrls: ['./counter-output-ngrx.component.css']
})
export class CounterOutputNgrxComponent implements OnInit, OnDestroy {

  counter = 0;
  counterSubscription!: Subscription;
  counter$!: Observable<number>;

  constructor(private store: Store<{ nanana: CounterState }>) { }

  //OR
  //constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.counterSubscription = this.store.select(getCounter).subscribe((counter) => {
      this.counter = counter;
    });

    this.counter$ = this.store.select(getCounter);
  }

  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }
}
