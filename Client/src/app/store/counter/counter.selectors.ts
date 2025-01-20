import { createSelector } from '@ngrx/store';

export const selectCounterState = (state: { counter: { counter: number } }) => state.counter;

export const selectCounterValue = createSelector(
  selectCounterState,
  (counterState) => counterState.counter
);