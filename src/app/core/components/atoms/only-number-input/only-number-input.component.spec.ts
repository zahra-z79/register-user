import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyNumberInputComponent } from './only-number-input.component';

describe('OnlyNumberInputComponent', () => {
  let component: OnlyNumberInputComponent;
  let fixture: ComponentFixture<OnlyNumberInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlyNumberInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlyNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
