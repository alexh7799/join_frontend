import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactItemComponent } from "./contact-item/contact-item.component";

@Component({
  selector: 'app-contact-group',
  standalone: true,
  imports: [CommonModule, ContactItemComponent],
  templateUrl: './contact-group.component.html',
  styleUrl: './contact-group.component.scss'
})
export class ContactGroupComponent {

  usergroup = [
    {
      alphabet: "M",
      users: [
        {
          id: 1,
          initials: "MM",
          capitalizedUserName: "Mario",
          email: "ma.m@mail.com",
          color: "#252525",
          tel: "02393484"
        },
        {
          id: 2,
          initials: "ME",
          capitalizedUserName: "Marion",
          email: "ma.e@mail.com",
          color: "#252525",
          tel: "02393484"
        }
      ]
    }
  ]

}
