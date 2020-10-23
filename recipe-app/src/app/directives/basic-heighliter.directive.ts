import { Directive, Renderer2, ElementRef, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBasicHeighliter]'
})
export class BasicHeighliterDirective implements OnInit {

  @Input() defaultColor: string = 'black';
  @Input() highlightColor: string = 'blue';

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }
  
  ngOnInit() {
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', this.highlightColor);
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', this.defaultColor);
  }


}
