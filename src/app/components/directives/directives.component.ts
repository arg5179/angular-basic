import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [NgIf, NgFor],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  show = true
  login = false;
  students = ['John', 'Jane', 'Doe', 'Smith', 'Emily'];
  users = [
    { name: 'John', age: 25, email: 'john@gmail.com'},
    { name: 'Jane', age: 30, email: 'jane@gmail.com'},
    { name: 'Doe', age: 22, email: 'doe@gmail.com'},
  ]

  users2 = [
    { 
      name: 'John', 
      age: 25, 
      email: 'john@gmail.com',
      hobbies: ['Reading', 'Swimming', 'Gaming']
    },
    { 
      name: 'Jane', 
      age: 30, 
      email: 'jane@gmail.com',
      hobbies: ['Cooking', 'Traveling']
    },
    { 
      name: 'Doe', 
      age: 22, 
      email: 'doe@gmail.com',
      hobbies: ['Drawing']
    }
  ];
  
}
