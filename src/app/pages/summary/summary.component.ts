import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent implements OnInit{
  greetingTime:string = "";
  userName:string = "";
  counters = {
    toDoCount: 0,
    inProgressCount: 0,
    doneCount: 0,
    urgentCount: 0,
    urgentTime: "",
    awaitingCount: 0,
    boardCount: 0
  }

  ngOnInit(): void {
    this.generateGreets()
  }

  getGreeting() {
    let now = new Date();
    let hours = now.getHours();
    if (hours >= 5 && hours < 12) return "morning";
    if (hours >= 12 && hours < 18) return "afternoon";
    if (hours >= 18 && hours < 24) return "evening";
    return "night";
}

  generateGreets() {
    this.greetingTime = this.getGreeting();
    this.userName = 'Guest' //sessionStorage.getItem("username");
    // if (this.userName == null) {
    //     userName = 'Guest'
    // }else {
    //   userName = 'Guest' // sessionStorage.getItem("username");
    // }
}



}
