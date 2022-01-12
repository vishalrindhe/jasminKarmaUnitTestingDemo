import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  value="";
  errorMessage = '';

  constructor(private data:LoginService,private router: Router) {}

  async login() {
    if (!(!!this.username && !!this.password)) {
      this.errorMessage = 'Please fill all fields';
      return;
    }
    try {
      const result = await this.data.login({
        username: this.username,
        password: this.password,
      });
      if (result) {
        this.router.navigateByUrl('/dashboard');
      } else {
        this.errorMessage = 'Invalid Login';
      }
    } catch (er) {
      this.errorMessage = 'Login Failed';
    }
  }
}
