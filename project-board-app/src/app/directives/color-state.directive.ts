import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColorState]'
})
export class ColorStateDirective implements OnInit {

  @Input() dueDate: string;
  @Input() isDone: boolean;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
    
  }

  ngOnInit() {
    const dueTime = new Date(this.dueDate);
    if (this.isDone === false) {
      if (+dueTime - Date.now()< 259200000) {
        this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
      } else if (+dueTime - Date.now() > 259200000 && +dueTime - Date.now() < 604800000) {
        this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
      }
    }
    
  }

}
