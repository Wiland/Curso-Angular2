import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  @Input('appHighlighted') color: string;

  constructor(private _element: ElementRef) {
    console.log('Highlighted directive called' + this.color);
  }

  @HostListener('mouseenter') mouseEntered() {
    this.highlight(this.color || 'yellow');
  }

  @HostListener('mouseleave') mouseLeaved() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this._element.nativeElement.style.backgroundColor = color;
  }

}
