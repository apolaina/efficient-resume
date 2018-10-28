import { Directive, HostListener, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appEventMenu]'
})

export class EventMenuDirective implements OnInit {

  private headerOpen: Element;
  private headerMenuOpen: Element;

  constructor() {}

  @HostListener('window:resize', ['$event'])
  onResize(event) {

    this.headerOpen =  document.querySelector('.header--open');
    this.headerMenuOpen = document.querySelector('.header__menu--open');

    if (event.target.innerWidth > 980 && this.headerOpen !== null && this.headerMenuOpen !== null) {
      this.closeMenu(this.headerOpen, this.headerMenuOpen);
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

    if ( RegExp(className).test(elem.className) ) {
      hasClass = true;
    }
    return hasClass;
  }

  ngOnInit(): void {}

}
