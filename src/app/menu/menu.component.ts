import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.pug',
  styleUrls: ['./menu.component.styl']
})
export class MenuComponent implements OnInit {

  title = 'Alice POLAINA';
  menus = [
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

  constructor() {}

  ngOnInit() {
  }

}
