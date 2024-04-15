import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent implements OnInit{

  constructor(protected tasksService:TasksService, public router:Router){

  }
  addTask(title:string, description:string,date:any):void{
    console.log(date);
    
    this.tasksService.tasks.push({title,description,isDone:false,date})
    this.router.navigate(['/'])
  }
  ngOnInit(): void {
    
  }
  

}
