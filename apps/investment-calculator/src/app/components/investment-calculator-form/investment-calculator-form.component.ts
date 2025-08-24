import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-investment-calculator-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './investment-calculator-form.component.html',
  styleUrl: './investment-calculator-form.component.css',
})
export class InvestmentCalculatorFormComponent {
  onFormSubmit() {
    console.log('HÁ')
  }
}
