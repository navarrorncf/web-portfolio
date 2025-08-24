import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HeaderComponent } from './components/header/header.component'

@Component({
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'investment-calculator'
}
