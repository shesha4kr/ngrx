import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

const counterSelectorFeature = createFeatureSelector<CounterState>('nanana');

export const getCounter = createSelector(counterSelectorFeature, (state) => {
    return state.counter;
})

//Similarly We can Add Getters for more Properties

/*  export const getProperty1 = createSelector(counterSelectorFeature, (state) => {
        return state.property1;
    }
*/