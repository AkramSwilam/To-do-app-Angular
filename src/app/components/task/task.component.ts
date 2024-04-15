import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../interfaces/task';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {
  task!: Task;
  taskId:any
  constructor(protected tasksService:TasksService, private router:ActivatedRoute, private navigation:Router){
  }

  updateTask(title:string,description:string,date:any):void{
    this.task.title=title
    this.task.description=description
    this.task.date=date
    this.tasksService.tasks[this.taskId]=this.task
    this.navigation.navigate(['/'])
  }
  ngOnInit(): void {
    this.taskId=this.router.snapshot.paramMap.get("id")
    this.task=this.tasksService.tasks[this.taskId]
  }


}
