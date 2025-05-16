import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedrivenform',
  imports: [FormsModule],
  templateUrl: './templatedrivenform.component.html',
  styleUrl: './templatedrivenform.component.scss'
})
export class TemplatedrivenformComponent {
  addDetails(val: NgForm){
    console.log("Details added", val);
  }
}
