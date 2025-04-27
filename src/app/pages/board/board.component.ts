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
          min: 0,
          max: 1
        }],
        contact: [{
          id: 1,
          initials: "MM",
          color: "#252525"
        }]
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
          min: 2,
          max: 5
        }],
        contact: [{
          id: 1,
          initials: "MM",
          color: "#252525"
        }]
      }
    ],
    progresstask: [],
    awaitingtask: [],
    donetask: []
  }

}