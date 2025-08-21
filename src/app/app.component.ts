import { Component } from '@angular/core';

import { DUMMY_USERS } from './dummy-users';
import { HeaderComponent } from './components/header/header.component';

type User = {
    id: string;
    name: string;
    avatar: string;
}

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent]
})
export class AppComponent {
  users: User[] = DUMMY_USERS;
  selectedUser?: User;
}
