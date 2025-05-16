import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-lazyloading',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './lazyloading.component.html',
  styleUrl: './lazyloading.component.scss'
})
export class LazyloadingComponent {

}
