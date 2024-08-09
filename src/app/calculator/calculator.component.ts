import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CalculatorState } from '../store/calculator.reducer';
import * as CalculatorActions from '../store/calculator.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  display$;
  fullExpression$;

  constructor(private store: Store<{ calculator: CalculatorState }>) {
    this.fullExpression$ = this.store.select(state => state.calculator.formula + state.calculator.display);
    this.display$ = this.store.select(state => state.calculator.display);
  }

  onDigitClick(digit: string) {
    this.store.dispatch(CalculatorActions.addDigit({ digit }));
  }

  onOperatorClick(operator: string) {
    this.store.dispatch(CalculatorActions.addOperator({ operator }));
  }

  onDecimalClick() {
    this.store.dispatch(CalculatorActions.addDecimal());
  }

  onToggleNegative() {
    this.store.dispatch(CalculatorActions.toggleNegative());
  }

  onPercentClick() {
    this.store.dispatch(CalculatorActions.addPercent());
  }

  onCalculateClick() {
    this.store.dispatch(CalculatorActions.calculate());
  }

  onClearClick() {
    this.store.dispatch(CalculatorActions.clear());
  }

  onClearAllClick() {
    this.store.dispatch(CalculatorActions.clear());
  }

  onBackspaceClick() {
    this.store.dispatch(CalculatorActions.backspace());
  }

  toggleTheme() {
    const calculatorElement = document.querySelector('.calculator');
    calculatorElement?.classList.toggle('light-theme');
  }
}
