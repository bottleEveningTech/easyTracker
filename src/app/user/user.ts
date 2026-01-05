import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { type UserType } from './user.model';
import { Card } from "../shared/card/card";

// type UserType = {
//   id: string;
//   name: string;
//   avatar: string
// };

//interface defines only object types

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css',
  imports: [Card],
})
export class User {
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  @Input({required: true}) isSelected!: boolean;
  @Input({ required: true }) user!: UserType;
  @Output() select = new EventEmitter<string>(); //let ang/ts no type of value to be emitted

  // selectSignal = output<string>(); //does not create a signal unlike input(), it only gives custom event that we can emit
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(()=> {
  //   return 'assets/users/' + this.avatar();
  // })
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
    // this.selectSignal.emit(this.id)
  }
}
