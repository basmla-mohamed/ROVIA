import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.component.scss',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  sendEmail() {
    Swal.fire({
      title: 'Welcome to ROVIA!',
      text: 'Thank you for joining our community.',
      icon: 'success',
      confirmButtonText: 'Explore More',
      confirmButtonColor: '#F0C58B',
      background: '#32131F',
      color: '#FFFFFF',
      customClass: {
        popup: 'alertPopup',
        title: 'titlePopup',
        confirmButton: 'buttonPopup',
      },
    });
  }
}
