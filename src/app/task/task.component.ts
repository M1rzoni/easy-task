import { Component, Input } from '@angular/core';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TasksComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) name!: string;
}
