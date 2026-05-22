// src/app/core/models/task.model.ts

export interface Task {
  id: number;
  title: string;
  description: string;
  status: 'open' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  progress: number;
  dueDate: string;
  assignee: {
    name: string;
    initials: string;
  };
}