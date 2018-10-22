import { Directive, HostListener, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appEventMenu]'
})

export class EventMenuDirective implements OnInit {

  constructor() {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {

    let headerOpen = document.querySelector('.header--open');
    let headerMenuOpen = document.querySelector('.header__menu--open');

    if (event.target.innerWidth > 980 && headerOpen !== null && headerMenuOpen !== null) {
      this.closeMenu(headerOpen, headerMenuOpen);
    }
  }

  closeMenu(headerOpen: Element, headerMenuOpen: Element): void {
    // console.log( 'closeMenu' );
    headerOpen.classList.remove('header--open');
    headerMenuOpen.classList.remove('header__menu--open');
    headerOpen.classList.add('header');
    headerMenuOpen.classList.add('header__menu');
  }

  hasClass(elem: Element, className: string): boolean {
    let hasClass = false;
    elem = <Element>elem;

    if( RegExp(className).test(elem.className) ) {
      hasClass = true;
    }
    return hasClass; 
  }

  ngOnInit(): void {}

}