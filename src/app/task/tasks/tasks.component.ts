import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './tasks.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) task!: Task;
  @Output() selected = new EventEmitter<string>();

  onSlectedTask() {
    this.selected.emit(this.task.id);
  }
}
