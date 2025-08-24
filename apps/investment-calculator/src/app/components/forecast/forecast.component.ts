import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AnnualForecast } from '../../services/investment.model'

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css',
})
export class ForecastComponent {
  @Input() forecast: AnnualForecast[] | null = null
}
