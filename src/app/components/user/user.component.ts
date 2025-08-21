import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CardComponent } from '../ui/card/card.component'

export type UserProps = {
  avatar: string
  id: string
  name: string
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({
    required: true,
    transform: transformProps
  })
  user!: UserProps

  @Input() selected = false

  @Output() userselected = new EventEmitter<string>()

  onSelectUser() {
    this.userselected.emit(this.user.id)
  }
}

export function transformProps(user: UserProps): UserProps {
  return {
    ...user,
    avatar: 'img/users/' + user.avatar,
  }
}
