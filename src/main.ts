import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { AppComponent } from './app/app.component';
import { calculatorReducer } from './app/store/calculator.reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ calculator: calculatorReducer }),
  ],
}).catch(err => console.error(err));
