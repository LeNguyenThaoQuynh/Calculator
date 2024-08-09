import { createReducer, on } from '@ngrx/store';
import * as CalculatorActions from './calculator.actions';

export interface CalculatorState {
  display: string;
  formula: string;
  isOperatorPressed: boolean;
}

export const initialState: CalculatorState = {
  display: '0',
  formula: '',
  isOperatorPressed: false
};

export const calculatorReducer = createReducer(
  initialState,
  on(CalculatorActions.addDigit, (state, { digit }) => {
    if (state.isOperatorPressed) {
      return {
        ...state,
        display: digit,
        isOperatorPressed: false
      };
    } else {
      return {
        ...state,
        display: state.display === '0' ? digit : state.display + digit
      };
    }
  }),
  on(CalculatorActions.addDecimal, (state) => {
    if (!state.display.includes('.')) {
      return {
        ...state,
        display: state.display === '0' ? '0.' : state.display + '.'
      };
    }
    return state;
  }),
  on(CalculatorActions.toggleNegative, (state) => {
    if (state.display !== '0') {
      return {
        ...state,
        display: state.display.startsWith('-') ? state.display.slice(1) : '-' + state.display
      };
    }
    return state;
  }),
  on(CalculatorActions.addPercent, (state) => {
    const currentValue = parseFloat(state.display);
    if (!isNaN(currentValue)) {
      const percentageValue = currentValue / 100;
      return {
        ...state,
        display: percentageValue.toString()
      };
    }
    return state;
  }),
  on(CalculatorActions.addOperator, (state, { operator }) => ({
    ...state,
    formula: state.formula + state.display + ' ' + operator + ' ',
    isOperatorPressed: true
  })),
  on(CalculatorActions.calculate, (state) => {
    try {
      const sanitizedFormula = state.formula + state.display;
      let result = new Function('return ' + sanitizedFormula)();
      let resultString = result.toString();

      return {
        ...state,
        display: resultString,
        formula: '',
        isOperatorPressed: false
      };
    } catch {
      return {
        ...state,
        display: 'Error',
        formula: '',
        isOperatorPressed: false
      };
    }
  }),
  on(CalculatorActions.clear, () => initialState),
  on(CalculatorActions.backspace, (state) => ({
    ...state,
    display: state.display.length > 1 ? state.display.slice(0, -1) : '0'
  }))
);
