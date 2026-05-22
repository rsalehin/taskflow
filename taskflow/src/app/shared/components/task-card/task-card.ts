import { Component } from '@angular/core';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css'
})
export class TaskCardComponent {

  // Einfache Werte
  title = 'Angular Interpolation lernen';
  description = 'Verstehen wie {{ }} funktioniert';
  priority = 'Hoch';
  dueDate = '2025-06-01';
  isCompleted = false;
  progress = 75;

  // Objekt
  assignee = {
    name: 'Max Mustermann',
    initials: 'MM'
  };

}