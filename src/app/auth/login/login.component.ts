import { InputComponent } from '../../core/components/atoms/input/input.component';
import { IUserModel } from '../../core/model/user.model';
import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public form: FormGroup | any;
  public userData = new Array<IUserModel>();
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.form = this.initForm();
  }

  private initForm() {
    return this.formBuilder.group({
      userName: [
        null,
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
          Validators.pattern(/^09\d{9}$/),
        ],
      ],
      password: [
        null,
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(4),
        ],
      ],
    });
  }

  public login() {
    if (!this.form?.valid) {
      this.form.markAllAsTouched();
      return;
    }

    this.getUserData();
    if (this.userData.length > 0) {
      let user = this.userData.find(
        (x) =>
          x.mobile == this.form.get('userName').value &&
          x.password == this.form.get('password').value
      );
      if (!user) {
        this.toastr.clear();
        this.toastr.error('نام کاربری یا کلمه عبور اشتباه است');
        return;
      }
      localStorage.setItem('activeUser', JSON.stringify(user));
      this.router.navigate(['./dashboard']);
    } else this.toastr.error('کاربری با این مشخصات یافت نشد ');
  }

  private getUserData() {
    let data = localStorage.getItem('userData');
    if (data) this.userData = JSON.parse(data);
  }
}
