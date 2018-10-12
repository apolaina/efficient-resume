import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'Alice POLAINA';

  openMenu(): void {
    console.log( 'openMenu' );
    let elemParent = document.querySelector('.header');
    let elemChild = document.querySelector('.header__menu');
    elemChild.classList.add('header__menu--open');
    elemParent.classList.add('header--open');
  }

  closeMenu(): void {
    console.log( 'closeMenu' );
    let elemParent = document.querySelector('.header');
    let elemChild = document.querySelector('.header__menu');
    elemChild.classList.remove('header__menu--open');
    elemParent.classList.remove('header--open');
  }
}
