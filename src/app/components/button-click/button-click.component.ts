import { Component } from '@angular/core';

@Component({
  selector: 'app-button-click',
  imports: [],
  templateUrl: './button-click.component.html',
  styleUrl: './button-click.component.scss'
})
export class ButtonClickComponent {
    handlebuttonclick(){
    console.log("Button clicked!");
    this.handlePlay();
    this.logging();
    this.sum(5,10);
  }

  handlePlay(){
    setTimeout(() => {
      console.log("Play button clicked!");
    }, 1000);
  }

  logging(){
    setTimeout(() => {
      console.log("Logging...");
    }, 2000);
  }

  sum(a:number,b:number){
    setTimeout(() => {
      console.log("Sum of a and b is: ", a+b);
    }, 3000);
  }
}
