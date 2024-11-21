import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputValidationComponent } from '../input-validation/input-validation.component';
import { OnlyNumbersDirective } from '../../../directives/only-numbers.directive';

@Component({
  selector: 'app-only-number-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputValidationComponent,
    OnlyNumbersDirective,
  ],
  templateUrl: './only-number-input.component.html',
  styleUrl: './only-number-input.component.css',
})
export class OnlyNumberInputComponent {
  @Input() controlName: any;
  @Input() type: string = 'text';
  @Input() placeHolder: string = 'عنوان';
}
