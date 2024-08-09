import { Component } from '@angular/core';
import { CalculatorComponent } from './calculator/calculator.component';
import { Store } from '@ngrx/store';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CalculatorComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator-app';

  constructor(private store: Store) {}
}
