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

  ngOnInit(): void {

    console.log( 'isOpen onInit', this.isOpen );

    this.renderer.listen(this.elRef.nativeElement, 'click', () => {

      let elemParent: Element = document.querySelector('.header');
      let elemChild: Element = document.querySelector('.header__menu');

      this.isOpen = elemParent.classList.contains('header--open') && elemChild.classList.contains('header__menu--open');

      console.log( 'isOpen click', this.isOpen );

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
