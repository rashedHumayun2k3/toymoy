import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.scss'],
})
export class CounterdisplayComponent implements OnInit {
  counterDisplay: number = 0;

  constructor(private store: Store<{ counter: { counter: number } }>) {}

  ngOnInit(): void {
    this.store.select('counter').subscribe((data) => {
      if (data) {
        console.log('State from Store:', data); // Debug state
        this.counterDisplay = data.counter;
      } else {
        console.error('Counter state is undefined.');
      }
    });
  }
}
