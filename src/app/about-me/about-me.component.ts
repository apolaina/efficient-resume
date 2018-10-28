import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.pug',
  styleUrls: ['./about-me.component.styl']
})
export class AboutMeComponent implements OnInit {

  constructor() {}

  ngOnInit() {

    // const headerOpen = document.querySelector('.header--open');
    // const headerMenuOpen = document.querySelector('.header__menu--open');
    // if (headerOpen !== null && headerMenuOpen !== null) {
    //   this.closeMenu(headerOpen, headerMenuOpen);
    // }

  }

  closeMenu(headerOpen: Element, headerMenuOpen: Element): void {
    // console.log( 'closeMenu' );
    headerOpen.classList.remove('header--open');
    headerMenuOpen.classList.remove('header__menu--open');
    headerOpen.classList.add('header');
    headerMenuOpen.classList.add('header__menu');
  }

}
