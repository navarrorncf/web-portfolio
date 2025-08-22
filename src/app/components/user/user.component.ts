import { Component, EventEmitter, Input, Output } from '@angular/core'
import { User } from './user.model'

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({
    required: true,
    transform: transformProps,
  })
  user!: User

  @Input() selected = false

  @Output() userselected = new EventEmitter<string>()

  onSelectUser() {
    this.userselected.emit(this.user.id)
  }
}

export function transformProps(user: User): User {
  return {
    ...user,
    avatar: 'img/users/' + user.avatar,
  }
}
