import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appOnlyNumbers]',
  standalone: true,
})
export class OnlyNumbersDirective {
  @Input() errorMessage: string = 'فقط اعداد مجاز هستند!';
  private originalPlaceholder: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.originalPlaceholder = this.el.nativeElement.placeholder;
  }

  @HostListener('input', ['$event']) onInput(event: Event) {
    const input = this.el.nativeElement as HTMLInputElement;

    const numericValue = input.value.replace(/[^0-9]/g, '');

    if (input.value !== numericValue) {
      input.value = numericValue;
      this.el.nativeElement.placeholder = this.errorMessage;
      this.renderer.addClass(this.el.nativeElement, 'error-placeholder');
      setTimeout(() => {
        this.el.nativeElement.placeholder = this.originalPlaceholder;
        this.renderer.removeClass(this.el.nativeElement, 'error-placeholder');
      }, 4000);
    }
  }
}
