import { Component, computed, Input, input, Output, output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
@Input({required: true}) id!: string 
@Input({required: true}) avatar!: string 
@Input() name!: string

//@Output() UserOutput = new EventEmitter();

UserOutput = output<string>()

UserId: string = "Vuong Sy Hung"


get imagePath(){
  return "assets/users/"+this.avatar
 }

onSelectUser(){
  this.UserOutput.emit(this.UserId)
}
  
}