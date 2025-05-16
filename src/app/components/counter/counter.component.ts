import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counter: number = 0;

  handleCounter(task: string) {
    if (task === 'increment') {
      this.counter++;
    } else if (task === 'decrement' && this.counter > 0) {
      this.counter--;
    } else if (task === 'reset'){
      this.counter = 0;
    }
  }
}