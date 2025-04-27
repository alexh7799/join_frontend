import { Component } from '@angular/core';
import { ContactGroupComponent } from "./contact-group/contact-group.component";

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [ContactGroupComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

}
