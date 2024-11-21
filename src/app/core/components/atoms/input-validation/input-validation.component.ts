import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-validation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-validation.component.html',
  styleUrl: './input-validation.component.css',
})
export class InputValidationComponent implements OnInit {
  public message: string = 'پر کردن فیلد الزامی است';
  @Input() controlName: FormControl | any;

  constructor() {}

  ngOnInit(): void {
    this.getErrorMessage();
    this.controlName.valueChanges.subscribe(() => {
      this.getErrorMessage();
    });

    this.controlName.statusChanges.subscribe(() => {
      this.getErrorMessage();
    });
  }

  getErrorMessage() {
    if (this.controlName?.hasError('required')) {
      this.message = 'این فیلد الزامی است.';
    } else if (this.controlName?.hasError('minlength')) {
      const minLength = this.controlName.getError('minlength').requiredLength;
      this.message = `حداقل تعداد کاراکتر ${minLength} است.`;
    } else if (this.controlName?.hasError('maxlength')) {
      const minLength = this.controlName.getError('maxlength').requiredLength;
      this.message = `حداکثر تعداد کاراکتر ${minLength} است.`;
    } else if (this.controlName?.hasError('email')) {
      this.message = 'لطفاً یک ایمیل معتبر وارد کنید.';
    } else {
      this.message = 'لطفاً اطلاعات را به صورت صحیح وارد کنید.';
    }
  }
}
