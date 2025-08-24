import { Injectable } from '@angular/core'
import {
  AnnualForecast,
  ReturnForecastCalculationInput,
} from './investment.model'
import { v7 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  calculateInvestmentResults({
    annualInvestment,
    duration,
    expectedReturn,
    initialInvestment,
  }: ReturnForecastCalculationInput): AnnualForecast[] {
    const annualData: AnnualForecast[] = []
    let investmentValue = initialInvestment

    for (let i = 0; i < duration; i++) {
      const year = i + 1
      const interestEarnedInYear = investmentValue * (expectedReturn / 100)
      investmentValue += interestEarnedInYear + annualInvestment
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment
      annualData.push({
        annualInvestment: annualInvestment,
        id: uuid(),
        interest: interestEarnedInYear,
        totalAmountInvested: initialInvestment + annualInvestment * year,
        totalInterest: totalInterest,
        valueEndOfYear: investmentValue,
        year: year,
      })
    }

    return annualData
  }
}
