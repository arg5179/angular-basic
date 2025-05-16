import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  imports: [],
  templateUrl: './for-loop.component.html',
  styleUrl: './for-loop.component.scss'
})
export class ForLoopComponent {
  users = [
    {name:'anil', age: 25, city: 'ankara', country: 'turkey'},
    {name:'ahmet', age: 30, city: 'istanbul', country: 'turkey'},
    {name:'mehmet', age: 35, city: 'izmir', country: 'turkey'},
    {name:'ayse', age: 28, city: 'bursa', country: 'turkey'},
    {name:'fatma', age: 22, city: 'antalya', country: 'turkey'},
    {name:'ali', age: 40, city: 'konya', country: 'turkey'},
    {name:'anur', age: 25, city: 'ankara', country: 'turkey'},
  ]

  getName(name:string){
    console.log(name);
  }
}
