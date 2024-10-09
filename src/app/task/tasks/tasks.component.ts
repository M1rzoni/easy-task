import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from './tasks.model';
import { CardComponent } from '../../ui/card/card.component';
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) task!: Task;
  @Output() selected = new EventEmitter<string>();

  private taskService = inject(TaskService);

  onSlectedTask() {
    this.taskService.removeTask(this.task.id);
  }
}
