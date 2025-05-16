import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomPipePipe } from './customPipe/custom-pipe.pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule, CustomPipePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  title = 'step by step code';
  date = new Date();
  amount = 150;

  value = 10;
}
