import { Component, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  protected readonly title = signal('sharpenUp-Angular');
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser(){
    return this.users.find(x => x.id === this.selectedUserId); //find is of JS, ! is convincing TS that this val will never be undefined
  }

  onSelectUser(id: string){
    this.selectedUserId = id;
  }
}
