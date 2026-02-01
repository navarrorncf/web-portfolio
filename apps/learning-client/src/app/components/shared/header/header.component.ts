import { NavigationService } from '@/services'
import { NgOptimizedImage } from '@angular/common'
import { Component, inject } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  navigationService = inject(NavigationService)
}
