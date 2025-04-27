import { Component } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [TaskComponent, CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {
  noTaskFind: boolean = false;
  tasks = {
    todotask: [
      {
        id: 1,
        cat: "",
        title: "Hallo",
        descr: "Ihre Aufgabe",
        prio: "low",
        type: "todo",
        subtask: [{
          title: "",
          min: "",
          max: ""
        }],
      },
      {
        id: 2,
        cat: "",
        title: "Task 2",
        descr: "Hsdf",
        prio: "low",
        type: "todo",
        subtask: [{
          title: "",
          min: "",
          max: ""
        }],
      }
    ],
    progresstask: [],
    awaitingtask: [],
    donetask: []
  }

}