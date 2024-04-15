import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Task[] = [
    // {
    //   title: "task 1",
    //   description: "task details"
    // }
  ]
  constructor() { }
}
