import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskCardComponent } from './shared/components/task-card/task-card';
import { Task } from './core/models/task.model';
import { NgFor } from '@angular/common'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskCardComponent, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  tasks: Task[] = [
    {
      id: 1,
      title: 'Angular @Input() lernen',
      description: 'Verstehen wie Daten von Eltern zu Kind fließen',
      priority: 'high',
      status: 'in-progress',
      dueDate: '2025-06-01',
      progress: 75,
      assignee: { name: 'Max Mustermann', initials: 'MM' }
    },
    {
      id: 2,
      title: 'TaskFlow Design fertigstellen',
      description: 'CSS für alle Components überarbeiten',
      priority: 'medium',
      status: 'open',
      dueDate: '2025-06-10',
      progress: 30,
      assignee: { name: 'Anna Schmidt', initials: 'AS' }
    },
    {
      id: 3,
      title: 'README schreiben',
      description: 'Projektbeschreibung für GitHub Portfolio',
      priority: 'low',
      status: 'done',
      dueDate: '2025-05-20',
      progress: 100,
      assignee: { name: 'Max Mustermann', initials: 'MM' }
    }
  ];

  // Wird aufgerufen wenn TaskCard deleteTask emittet
  onDeleteTask(taskId: number) {
    this.tasks = this.tasks.filter(t => t.id !== taskId);
    console.log('Task gelöscht:', taskId);
  }

  // Wird aufgerufen wenn TaskCard toggleStatus emittet
  onToggleStatus(updatedTask: Task) {
    this.tasks = this.tasks.map(t =>
      t.id === updatedTask.id ? updatedTask : t
    );
    console.log('Status geändert:', updatedTask.title, '→', updatedTask.status);
  }

}