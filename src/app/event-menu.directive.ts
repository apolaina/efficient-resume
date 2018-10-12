import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEventMenu]'
})
export class EventMenuDirective implements OnInit {

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  let toggleFlag = false;

  ngOnInit() {

    // this.renderer.listen(this.elRef.nativeElement, 'click', () => {
    //   this.toggleFlag = (this.toggleFlag === true) ? false : true;
    //   if(this.toggleFlag) {
    //     this.renderer.addClass(this.elRef.nativeElement, 'header__menu--open');
    //   } else {
    //     this.renderer.removeClass(this.elRef.nativeElement, 'header__menu--open');
    //   }
	  // });

  }

}
