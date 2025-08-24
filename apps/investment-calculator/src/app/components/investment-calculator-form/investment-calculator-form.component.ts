import { Component, EventEmitter, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { ReturnForecastCalculationInput } from '../../services/investment.model'

@Component({
  selector: 'app-investment-calculator-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './investment-calculator-form.component.html',
  styleUrl: './investment-calculator-form.component.css',
})
export class InvestmentCalculatorFormComponent {
  @Output() calculatorformsubmit =
    new EventEmitter<ReturnForecastCalculationInput>()

  initialInvestment = 0
  annualInvestment = 0
  duration = 0
  expectedReturn = 0

  onFormSubmit() {
    this.calculatorformsubmit.emit({
      annualInvestment: this.annualInvestment,
      duration: this.duration,
      expectedReturn: this.expectedReturn,
      initialInvestment: this.initialInvestment,
    })
  }
}
