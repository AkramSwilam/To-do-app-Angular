import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(protected tasksService:TasksService){
  }

  deleteTask(index:number):void{
    console.log("deleted");
    
    this.tasksService.tasks.splice(index,1)
    
  }

  toggleDone(index:number):void{
    this.tasksService.tasks[index].isDone=!this.tasksService.tasks[index].isDone
    
  }
  ngOnInit(): void {
  }

}
