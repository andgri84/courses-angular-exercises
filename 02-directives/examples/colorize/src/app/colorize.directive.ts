import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorize]'
})
export class ColorizeDirective implements OnInit {

  @Input()
  colorizeColor = 'red';

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.togglehighlight();
  }

  @HostListener('click')
  onclick() {
    this.togglehighlight();
  }

  togglehighlight() {
    this.el.nativeElement.style.color = this.el.nativeElement.style.color ? null : this.colorizeColor;
  }

}
