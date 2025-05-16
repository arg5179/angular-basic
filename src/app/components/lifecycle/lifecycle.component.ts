import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.scss'
})
export class LifecycleComponent {
  name = 'Sam';
  constructor(){
    console.log('Lifecycle Component constructor');
    this.name = 'bruce';
  }
  ngOnInit(){
    console.log('Lifecycle Component ngOnInit');
    this.name = 'peter';
  }
}
