import { Component } from '@angular/core'

import { DUMMY_USERS } from './dummy-users'
import { User } from './components/user/user.model'

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: User[] = DUMMY_USERS
  selectedUser?: User

  onSelectUser(id: string) {
    this.selectedUser = this.users.find((u) => u.id === id)
  }
}
