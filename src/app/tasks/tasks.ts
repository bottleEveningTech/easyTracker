import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { type NewTaskData } from './task/task.model';
import { Card } from "../shared/card/card";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [Task, NewTask, Card],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {

  // @Input()userName?: string; 
  @Input({required: true}) userId!: string;
  @Input({required: true}) userName!: string  //| undefined; //alternative
  isAddingTask: boolean = false;
  constructor(private taskService: TasksService){
  }
 
  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }
  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCancelAddTask(){
    this.isAddingTask = false;
  }
 
}
