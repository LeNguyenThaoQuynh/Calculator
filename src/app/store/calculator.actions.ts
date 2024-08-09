import { createAction, props } from '@ngrx/store';

export const addDigit = createAction('[Calculator] Add Digit', props<{ digit: string }>());

export const addOperator = createAction('[Calculator] Add Operator', props<{ operator: string }>());

export const addDecimal = createAction('[Calculator] Add Decimal');

export const toggleNegative = createAction('[Calculator] Toggle Negative');

export const addPercent = createAction('[Calculator] Add Percent');

export const calculate = createAction('[Calculator] Calculate');

export const clear = createAction('[Calculator] Clear');

export const backspace = createAction('[Calculator] Backspace');
