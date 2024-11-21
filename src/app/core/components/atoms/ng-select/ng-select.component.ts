import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputValidationComponent } from '../input-validation/input-validation.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-select',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgSelectModule,
    InputValidationComponent,
    CommonModule,
  ],
  templateUrl: './ng-select.component.html',
  styleUrl: './ng-select.component.css',
  encapsulation: ViewEncapsulation.None
})
export class NgSelectComponent {
  @Input() controlName: any;
  @Input() placeHolder: string = 'عنوان';
  @Input() bindLabel: string = '';
  @Input() bindValue: string = '';
  @Input() itemsList = new Array<any>();
  @Output() onChange = new EventEmitter<boolean>();

  public onSelectChange() {
    this.onChange.emit();
  }
}
