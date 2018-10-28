import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.pug',
  styleUrls: ['./menu.component.styl']
})
export class MenuComponent implements OnInit {

  private title: String = 'Alice POLAINA';
  private menus: any = [
    {
      name: 'About me',
      link: '/about-me'
    },
    {
      name: 'Skills',
      link: '/skills'
    },
    {
      name: 'Work experience',
      link: '/skills'
    },
    {
      name: 'Education',
      link: '/skills'
    },
    {
      name: 'Say hi!',
      link: '/skills'
    }
  ];
  private open: Boolean = false;

  private headerOpen: Element;
  private headerMenuOpen: Element;

  constructor() {}

  ngOnInit(): void {
  }

  clickMenuMobile(open): void {
    console.log('click', open);
    if (window.innerWidth < 980) {
      this.open = !open;
      console.log('open', open);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {

    console.log('resize', this.open);

    this.headerOpen =  document.querySelector('.header--open');
    this.headerMenuOpen = document.querySelector('.header__menu--open');

    if (event.target.innerWidth > 980 && this.headerOpen !== null && this.headerMenuOpen !== null) {
      this.open = !open;
    }
  }

}
