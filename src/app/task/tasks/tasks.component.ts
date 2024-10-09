import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './tasks.model';
import { CardComponent } from '../../ui/card/card.component';
import { DatePipe } from '@angular/common';

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

  onSlectedTask() {
    this.selected.emit(this.task.id);
  }
}
