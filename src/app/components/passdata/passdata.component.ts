import { Component } from '@angular/core';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-passdata',
  imports: [ChildComponent],
  templateUrl: './passdata.component.html',
  styleUrl: './passdata.component.scss'
})
export class PassdataComponent {
  userName = 'Bruce';
  onUserChange(user:string){
    this.userName = user;
    console.log('User name changed to:', user);
  }
}
