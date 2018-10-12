import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'Alice POLAINA';

  toggleMenu(): void {
    console.log( 'hello' );
    let elem = document.querySelector('.header__menu');
    elem.className += ' header__menu--open';
  }
}
