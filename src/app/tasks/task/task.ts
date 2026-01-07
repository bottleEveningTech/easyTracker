import { Component, inject, Input } from '@angular/core';
import { TaskModel } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.html',
  styleUrl: './task.css',
  standalone: false
})
export class Task {

  @Input({required: true}) task!: TaskModel;
  private taskService = inject(TasksService);
  onCompleteTask(){
    this.taskService.removeTask(this.task.id);
  }
}
