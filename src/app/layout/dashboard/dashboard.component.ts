import { Component } from '@angular/core';
import { IUserModel } from '../../core/model/user.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  public userData: IUserModel = {
    provinceId: null,
    firstName: '',
    cityId: null,
    lastName: '',
    mobile: null,
    password: '',
  };

  constructor(private toastr: ToastrService) {
    this.getUserData();
  }

  private getUserData() {
    let data = localStorage.getItem('activeUser');
    if (data) this.userData = JSON.parse(data);
  }

  public showToast() {
    this.toastr.success('jhbjhsbjchb')
  }
}
