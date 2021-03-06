import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(@Inject(DOCUMENT) document) { }
  scrolled = false;
  ngOnInit() { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 20) {
      let element = document.querySelector('.header');
      element.classList.add('sticky');
      this.scrolled = true;

    } else {
      let element = document.querySelector('.header');
      element.classList.remove('sticky');
      this.scrolled = false;

    }
  }

  GotoToService(s) {
    if (s == "services")
      window.scrollTo({
        top: 900,
        behavior: 'smooth'
      });
    if (s == "Reviews")
      window.scrollTo({
        top: 2480,
        behavior: 'smooth'
      });
    if (s == "Clients")
      window.scrollTo({
        top: 2480,
        behavior: 'smooth'
      });
    if (s == "About")
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    if (s == "Contact")
      window.scrollTo({
        top: 2562,
        behavior: 'smooth'
      });
  }
}
