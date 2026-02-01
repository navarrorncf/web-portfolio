import { Component } from '@angular/core'

import { HomeLayoutComponent } from '@/components/layout/home-layout/home-layout.component'

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HomeLayoutComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
