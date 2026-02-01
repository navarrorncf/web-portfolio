import { Component } from '@angular/core'

import { FooterComponent } from '@/components/shared/footer/footer.component'
import { HeaderComponent } from '@/components/shared/header/header.component'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css',
})
export class HomeLayoutComponent {}
