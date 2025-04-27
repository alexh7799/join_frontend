import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.scss'
})
export class ContactItemComponent {
  @Input() users: any;


  showContactDetails(userId: any) {
    try {
      console.log(userId)
        let contactDetails = document.getElementById("contact-details");
        let btnMobilePopup = document.getElementById("btn-mobile-popup");
        // contactDetails.innerHTML = "";
        // let selectedUser = userArray.find(user => user.id == userId);
        // if (window.innerWidth <= 826) {
        //     contactDetails.parentElement.classList.add('mobile-popup');
        //     btnMobilePopup.classList.remove('d-none');
        //     document.body.style.overflow = 'hidden';
        //     document.getElementById('contact-pop-up').innerHTML = renderEditDeletePopup(selectedUser);
        // }
        // contactDetails.innerHTML = renderContactDetails(selectedUser);
        return true;
    } catch (error) {
        return false;
    }
}
}
