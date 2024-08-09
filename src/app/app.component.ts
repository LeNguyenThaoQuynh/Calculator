import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CalculatorState } from './store/calculator.reducer';
import * as CalculatorActions from './store/calculator.actions';
import { RouterOutlet } from '@angular/router';
import { CalculatorComponent } from "./calculator/calculator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator-app';

  constructor(private store: Store<{ calculator: CalculatorState }>) {}

  onDigitClick(digit: string) {
    this.store.dispatch(CalculatorActions.addDigit({ digit }));
  }

  onOperatorClick(operator: string) {
    this.store.dispatch(CalculatorActions.addOperator({ operator }));
  }

  onCalculateClick() {
    this.store.dispatch(CalculatorActions.calculate());
  }

  onClearClick() {
    this.store.dispatch(CalculatorActions.clear());
  }
}
