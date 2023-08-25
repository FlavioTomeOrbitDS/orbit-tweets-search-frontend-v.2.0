import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit() {
    const isAuthenticated = this.loginService.login(
      this.username,
      this.password
    );
    if (isAuthenticated) {
      // Redirect to the home page or the desired route upon successful login

      this.router.navigate(['/searchPage']);
    } else {
      this.loginError = true;
    }
  }

  ngOnInit(): void {}
}
