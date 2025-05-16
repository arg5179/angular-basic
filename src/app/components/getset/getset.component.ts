import { Component } from '@angular/core';

@Component({
  selector: 'app-getset',
  imports: [],
  templateUrl: './getset.component.html',
  styleUrl: './getset.component.scss'
})
export class GetsetComponent {
  name="";
  displayName=""
  email=""
  getName(event: Event){
    const val = (event.target as HTMLInputElement).value;
    this.name = val
  }
  
  showName(){
    this.displayName = this.name;
  }
  setName(){
    this.name = "John Doe"
  }

  getEmail(val:string){
    console.log(val)
    this.email = val
  }
  setEmail(val:string){
    console.log(val)
    this.email = "default@hcl.com"
  }
}
