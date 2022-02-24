import { createReducer, on } from "@ngrx/store";
import { decrementCounter, incrementByValue, incrementCounter, resetCounter } from "./counter.action";
import { intitialCounter } from "./counter.state";

export function counterReducer(state: any, action: any) {
    return createCounterReducer(state, action);
}

const createCounterReducer = createReducer(intitialCounter,
    on(incrementCounter, (state) => {
        return { ...state, counter: state.counter + 1 }
    }),
    on(decrementCounter, (state) => {
        return { ...state, counter: state.counter - 1 }
    }),
    on(resetCounter, (state) => {
        return { ...state, counter: 0 }
    }),
    on(incrementByValue, (state, action) => {
        console.log('ACTION: ' + JSON.stringify(action));
        return { ...state, counter: state.counter + action.value }
    })
);