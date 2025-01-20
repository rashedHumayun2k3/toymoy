import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../../store/counter/counter.actions';
import { map, Observable } from 'rxjs';
import { selectCounterValue } from '../../../store/counter/counter.selectors';

@Component({
  selector: 'app-counterbutton',
  imports: [],
  templateUrl: './counterbutton.component.html',
  styleUrl: './counterbutton.component.scss'
})
export class CounterbuttonComponent {
  counter$: Observable<number>;
  constructor(private store: Store<{ counter: { counter: number } }>) {
    this.counter$ = this.store.select('counter').pipe(
      map((state) => state.counter) // Extract counter property
    );
  }

  OnIncrement() {
    this.store.dispatch(increment());
  }

  OnDecrement() {
    this.store.dispatch(decrement());
  }

  OnReset() {
    this.store.dispatch(reset());
  }
}
