import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {

  // @Input()userName?: string; 
  @Input() userName: string | undefined; //alternative

}
