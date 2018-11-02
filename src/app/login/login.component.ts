import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Set Up Properties
  email: string;
  password: string;
  userType: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onLogin() {
    if (this.userType === 'professor') {
      this.router.navigateByUrl('/prof-start');
    } else if (this.userType === 'student') {
      this.router.navigateByUrl('/student');
    }
  }

}
