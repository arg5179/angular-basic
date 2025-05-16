import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent {
  handleEvent(event:any){
    console.log("Event Called mouseEnter: ", event);
    console.log("Event Type : ", event.type);
    console.log("Event btn clasName : ", (event.target as Element).className);
  }

  handleEvents(event:any){
    console.log("Event Called mouseOver: ", event);
  }

  handleInputEvent(event:any){
    console.log("Event Called input: ", event);
  }

  handleOutputEvent(event:Event){
    console.log('event called logout : ', event)
    console.log("value : ", (event.target as HTMLInputElement).value);
  }
}
