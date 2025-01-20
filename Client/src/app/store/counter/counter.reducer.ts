import { createReducer, on } from "@ngrx/store";
import { increment, decrement, reset } from "./counter.actions";
import { initialState } from "./counter.state";

const _counterReducer = createReducer(
    initialState,
    on(increment, (state) => {
        console.log('Reducer State before increment:', state);
        return { ...state, counter: state.counter + 1 };
    }),
    on(decrement, (state) => {
        console.log('Reducer State before decrement:', state);
        return { ...state, counter: state.counter - 1 };
    }),
    on(reset, (state) => {
        console.log('Reducer State before reset:', state);
        return { ...state, counter: 0 };
    })
);

export function counterReducer(state: any, action: any){
    return _counterReducer(state, action);
}