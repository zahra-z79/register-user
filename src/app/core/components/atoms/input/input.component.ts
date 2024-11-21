import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputValidationComponent } from '../input-validation/input-validation.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, InputValidationComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() controlName: FormControl;
  @Input() type: string = 'text';
  @Input() placeHolder: string = 'عنوان';
}
