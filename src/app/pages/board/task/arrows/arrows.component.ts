import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrows',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './arrows.component.html',
  styleUrl: './arrows.component.scss'
})
export class ArrowsComponent {
  @Input() task:any;

}
