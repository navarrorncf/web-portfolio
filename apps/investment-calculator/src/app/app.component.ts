import { Component, inject } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HeaderComponent } from './components/header/header.component'
import { InvestmentCalculatorFormComponent } from './components/investment-calculator-form/investment-calculator-form.component'
import {
  AnnualForecast,
  ReturnForecastCalculationInput,
} from './services/investment.model'
import { InvestmentService } from './services/investment.service'
import { ForecastComponent } from './components/forecast/forecast.component'

@Component({
  standalone: true,
  imports: [
    ForecastComponent,
    HeaderComponent,
    InvestmentCalculatorFormComponent,
    RouterModule,
    ForecastComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private data: AnnualForecast[] | null = null

  investmentService = inject(InvestmentService)

  get forecast() {
    return this.data
  }
  updateForecast(eventData: ReturnForecastCalculationInput) {
    this.data = this.investmentService.calculateInvestmentResults(eventData)
    console.log(this.data)
  }
}
