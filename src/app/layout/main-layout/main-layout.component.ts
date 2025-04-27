import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, HeaderComponent, RouterModule, MatListModule, MatIconModule,],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
  
})
export class MainLayoutComponent {

}
