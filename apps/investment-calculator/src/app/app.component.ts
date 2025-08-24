import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HeaderComponent } from './components/header/header.component'
import { InvestmentCalculatorFormComponent } from './components/investment-calculator-form/investment-calculator-form.component'

@Component({
  standalone: true,
  imports: [HeaderComponent, InvestmentCalculatorFormComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'investment-calculator'
}
