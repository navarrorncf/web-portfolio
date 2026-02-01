import { Component, inject } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HomePageComponent } from './pages/home-page/home-page.component'

@Component({
  standalone: true,
  imports: [RouterModule, HomePageComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
