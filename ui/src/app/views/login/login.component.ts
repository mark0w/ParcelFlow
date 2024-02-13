import {Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData = {
    username: '',
    password: ''
  };
  loginError = false;

  constructor() {
  }

  onSubmit(form: any) {
    if (form.valid) {
      // Implement login here
      this.loginError = true;
    }
  }
}
