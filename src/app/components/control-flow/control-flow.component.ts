import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent {
  display:boolean = true;
  togglediv:boolean = true
  
  hideDiv(){
    this.display = false
  }

  toggle(){
    this.display = !this.display
  }

  toggleTwo(){
    this.togglediv = !this.togglediv
  }


  color:number  = 2;
  handleBgcolor(value:number){
    this.color = value;
  }
  handleInput(event:Event){
    this.color = parseInt((event?.target as HTMLInputElement).value);
  }
}
