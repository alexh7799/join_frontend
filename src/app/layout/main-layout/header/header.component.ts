import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatMenuModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isPopupOpen = false;

  togglePopUp() {
    this.isPopupOpen = !this.isPopupOpen;
  }

  closePopUp() {
    this.isPopupOpen = false;
  }

}
