import { Component, signal, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isPopupOpen = signal(false);

  activeLink = 'Home';

  @ViewChild('up') up!: ElementRef;

  @HostListener('window:scroll')
  onWindowScroll() {
    if (window.scrollY > 200) {
      this.up.nativeElement.classList.add('show');
    } else {
      this.up.nativeElement.classList.remove('show');
    }
  }

  openPopup() {
    this.isPopupOpen.set(true);
  }

  closePopup() {
    this.isPopupOpen.set(false);
  }

  changeActive(link: string) {
    this.activeLink = link;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
