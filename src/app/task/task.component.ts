import { Component, Input } from '@angular/core';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './tasks/tasks.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TasksComponent, NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  isClicked = false;

  constructor(private taskService: TaskService) {}

  get selectedUserTasks() {
    return this.taskService.getSlectedUser(this.userId);
  }

  slectedTask(id: string) {}

  addNewTask() {
    this.isClicked = true;
  }

  onCancelTask() {
    this.isClicked = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.isClicked = false;
  }
}
