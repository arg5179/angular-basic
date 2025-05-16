import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dynamic-routing',
  imports: [ RouterLink,],
  templateUrl: './dynamic-routing.component.html',
  styleUrl: './dynamic-routing.component.scss'
})
export class DynamicRoutingComponent {
  users = [
    { id: 1, name: 'John Doe', age: 25},
    { id: 2, name: 'Jane Smith', age: 30},
    { id: 3, name: 'Alice Johnson', age: 28},
    { id: 4, name: 'Bob Brown', age: 35},
    { id: 5, name: 'Charlie Davis', age: 22},
    { id: 6, name: 'Diana Prince', age: 27},
    { id: 7, name: 'Ethan Hunt', age: 32},
    { id: 8, name: 'Felicity Smoak', age: 29},
    { id: 9, name: 'George Clooney', age: 40},
    { id: 10, name: 'Hannah Montana', age: 20}
  ]
}
