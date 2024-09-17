import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { mapToResolve } from '@angular/router';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  slecetedUser = DUMMY_USERS[randomIndex];

  get imagePath(){
   return './assets/users/'  + this.slecetedUser.avatar;
  }

  onSelectedUser(){

    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

    this.slecetedUser = DUMMY_USERS[randomIndex];
  }

}
