import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEventMenu]'
})
export class EventMenuDirective implements OnInit {

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  private isOpen = false;

  openMenu(): void {
    // console.log( 'openMenu' );
    let elemParent = document.querySelector('.header');
    let elemChild = document.querySelector('.header__menu');
    elemChild.classList.add('header__menu--open');
    elemParent.classList.add('header--open');
  }

  closeMenu(): void {
    // console.log( 'closeMenu' );
    let elemParent = document.querySelector('.header');
    let elemChild = document.querySelector('.header__menu');
    elemChild.classList.remove('header__menu--open');
    elemParent.classList.remove('header--open');
  }

  hasClass(elem: Element, className: string): boolean {
    let hasClass = false;
    elem = <Element>elem;

    if( RegExp(className).test(elem.className) ) {
      hasClass = true;
    }
    return hasClass; 
  }

  ngOnInit(): void {

    console.log( 'isOpen onInit', this.isOpen );

    this.renderer.listen(this.elRef.nativeElement, 'click', () => {

      let elemParent: Element = document.querySelector('.header');
      let elemChild: Element = document.querySelector('.header__menu');

      this.isOpen = elemParent.classList.contains('header--open') && elemChild.classList.contains('header__menu--open');

      console.log( !(this.hasClass(this.elRef.nativeElement, 'header__menu__btn') || this.hasClass(this.elRef.nativeElement, 'header__menu__close')))

      // Manage the --active class
      if( !(this.hasClass(this.elRef.nativeElement, 'header__menu__btn') || this.hasClass(this.elRef.nativeElement, 'header__menu__close')) ){
        // Remove --active class of old element
        let oldActiveElement: Element = document.querySelector('.header__menu__links__item--active');
        oldActiveElement.classList.remove('header__menu__links__item--active');
  
        // Add --active class of current element
        let currentActiveElementParent = this.renderer.parentNode(this.elRef.nativeElement);
        this.renderer.addClass(currentActiveElementParent, 'header__menu__links__item--active');
      }

      // Manage the opening/closing of the menu
      if(this.isOpen) {
        this.closeMenu();
        this.isOpen = false;
        console.log( 'removeClass' );
      } else {
        this.openMenu();
        this.isOpen = true;
        console.log( 'addClass' );
      }

	  });

  }

}
