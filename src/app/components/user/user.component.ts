import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  constructor(private route:ActivatedRoute) {}

  ngOninit() { 
    this.route.params.subscribe((params) => {
      console.log(params);
    });
  }
}
