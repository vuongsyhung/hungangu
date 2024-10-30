import { Component, computed, signal } from '@angular/core';
import { DumyUser } from '../../assets/dumy-user';

const randomIndex = Math.floor(Math.random()*DumyUser.length)


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
selectedUser = signal(DumyUser[randomIndex])
pathToUser = computed(()=> "assets/users/" + this.selectedUser().avatar)

onSelectUser(){
  const randomIndex = Math.floor(Math.random()*DumyUser.length)

  this.selectedUser.set(DumyUser[randomIndex])  

  console.log(this.selectedUser().name)
}

}
