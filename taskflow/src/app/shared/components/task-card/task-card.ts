import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../core/models/task.model';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css'
})
export class TaskCardComponent {

  @Input() task!: Task;

  @Output() deleteTask = new EventEmitter<number>();
  @Output() toggleStatus = new EventEmitter<Task>();

  onDelete() {
    this.deleteTask.emit(this.task.id);
    //                    ↑
    // schickt die Task-ID nach oben
  }

  onToggleStatus() {
    const newStatus = this.task.status === 'done' ? 'open' : 'done';
    this.toggleStatus.emit({ ...this.task, status: newStatus });
    //                       ↑
    // schickt den ganzen Task mit neuem Status nach oben
  }

}