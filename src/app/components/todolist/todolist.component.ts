import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  imports: [FormsModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss'
})
export class TodolistComponent {
  task = ""
  tasklist: {id:number, task:string}[]= []

  addTask(){
    if(this.task !== ""){
      this.tasklist.push({id:this.tasklist.length + 1, task: this.task})
    }
    console.log(this.tasklist)
    this.task = "";
  }

  deleteTask(id: number) {
    this.tasklist = this.tasklist.filter(task => task.id !== id);
  }
}
