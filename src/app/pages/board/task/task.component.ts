import { Component, Input } from '@angular/core';
import { ArrowsComponent } from './arrows/arrows.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ArrowsComponent, CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input() task: any;
  draggedTaskId: any;

  handleDrag(taskId: any) {
    const element = document.getElementById(`task${taskId}`) as HTMLElement;
    element.classList.add('dragging');
    this.draggedTaskId = taskId;
  }

  handleDragEnd(event: Event, taskId: any) {
    const element = document.getElementById(`task${taskId}`) as HTMLElement;
    element.classList.remove('dragging');
  }

  showEditTask(taskId: any, showType: any) {
    // let overlayDiv = document.getElementById('overlay-edit-task');
    // overlayDiv.classList.add('overlay-edit');
    // task = tasksArray.filter(task => task.firebaseId === taskId);
    // if(showType == 'bigCard') {
    //   overlayDiv.innerHTML = renderCardOverlay(task);
    // } else if(showType == 'editTask') {
    //   editedTask = task;
    //   overlayDiv.innerHTML = renderEditOverlay();
    // }
    // document.body.style.overflowY = "hidden";
  }
}
