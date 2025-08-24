export type ReturnForecastCalculationInput = {
  annualInvestment: number
  duration: number
  initialInvestment: number
  expectedReturn: number
}

export type AnnualForecast = {
  annualInvestment: number
  id: string
  interest: number
  totalAmountInvested: number
  totalInterest: number
  valueEndOfYear: number
  year: number
}
