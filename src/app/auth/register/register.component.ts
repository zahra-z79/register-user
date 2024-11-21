import { OnlyNumberInputComponent } from '../../core/components/atoms/only-number-input/only-number-input.component';
import { NgSelectComponent } from '../../core/components/atoms/ng-select/ng-select.component';
import { InputComponent } from '../../core/components/atoms/input/input.component';
import { ProvinceModel } from '../../core/model/province.model';
import { IUserModel } from '../../core/model/user.model';
import { CityModel } from '../../core/model/city.model';
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
  selector: 'app-register',
  standalone: true,
  imports: [
    OnlyNumberInputComponent,
    ReactiveFormsModule,
    NgSelectComponent,
    InputComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  public provinceList: Array<ProvinceModel> = [
    {
      title: 'تهران',
      value: 1,
    },
    {
      title: 'اصفهان',
      value: 2,
    },
    {
      title: 'فارس',
      value: 3,
    },
  ];

  public cityList: Array<CityModel> = [
    {
      title: 'زرین شهر',
      provinceId: 2,
      value: 1,
    },
    {
      title: 'گزبرخوار',
      provinceId: 2,
      value: 2,
    },
    {
      title: 'تیران',
      provinceId: 2,
      value: 3,
    },
    {
      title: 'فردوسیه',
      provinceId: 1,
      value: 4,
    },
    {
      title: 'ورامین',
      provinceId: 1,
      value: 5,
    },
    {
      title: 'آبعلی',
      provinceId: 1,
      value: 6,
    },
    {
      title: 'کازرون',
      provinceId: 3,
      value: 7,
    },
    {
      title: 'فیروزآباد',
      provinceId: 3,
      value: 8,
    },
    {
      title: 'رامجرد',
      provinceId: 3,
      value: 9,
    },
  ];
  public filteredCityList = new Array<CityModel>();
  public form: FormGroup | any;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.form = this.initForm();
  }

  private initForm() {
    return this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      mobile: [
        null,
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
          Validators.pattern(/^09\d{9}$/),
        ],
      ],
      provinceId: [null, [Validators.required]],
      cityId: [null, [Validators.required]],
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

  public onProvinceChange() {
    this.form.get('cityId').reset();
    this.filteredCityList = this.cityList.filter(
      (x) => x.provinceId == this.form.get('provinceId')?.value
    );
  }

  public createUser() {
    if (!this.form?.valid) {
      this.form.markAllAsTouched();
      return;
    }

    let existingUser = localStorage.getItem('userData');
    let userList = new Array<IUserModel>();

    if (existingUser) {
      userList = JSON.parse(existingUser);
    }

    let checkUser = userList.find(
      (x) => x.mobile == this.form.get('mobile').value
    );
    if (checkUser) {
      this.toastr.error('کاربری با این شماره موبایل وجود دارد');
      return;
    }

    userList.push(this.form.value);
    localStorage.setItem('userData', JSON.stringify(userList));
    localStorage.setItem('activeUser', JSON.stringify(this.form.value));
    this.toastr.success('ثبت نام با موفقیت انجام شد');
    this.router.navigate(['./dashboard']);
  }
}
