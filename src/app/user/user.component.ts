import { Component, computed, Input, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
// @Input() avatar!: string
// @Input() name!: string

// Using like a function to subscribe data
avatar = input.required<string>()
name = input<string>()

// Using like a function to subscribe data
imagePath = computed(() => {
  return "assets/users/"+this.avatar()
})

// get imagePath(){
//   return "assets/users/"+this.avatar()
// }

onSelectUser(){} 
}


