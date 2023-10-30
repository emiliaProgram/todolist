import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Task {
  name: string;
  done: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoForm: FormGroup;
  tasks: Task[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.todoForm = this.formBuilder.group({
      newTask: ['', Validators.required]
    });
  }

  addTask(): void {
    if (this.todoForm.invalid) {
      return;
    }

    const task: Task = {
      name: this.todoForm.value.newTask,
      done: false
    };

    this.tasks.push(task);
    this.todoForm.reset();
  }

  toggleDone(index: number): void {
    this.tasks[index].done = !this.tasks[index].done;
  }
}
