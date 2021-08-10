import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.highlight('');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.highlight('red');
  }

  private highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
    if (color === 'red'){
      this.el.nativeElement.style.color = 'white';
    }else{
      this.el.nativeElement.style.color = 'gray';
    }
  }

}

