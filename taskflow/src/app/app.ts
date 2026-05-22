import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar';
import { TaskCardComponent } from './shared/components/task-card/task-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, TaskCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'taskflow';
}