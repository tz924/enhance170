import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  // Set Up Properties
  email: string;
  password: string;
  userType: string;

  constructor(
    private router: Router,
    private storage: LocalStorageService
  ) { }

  ngOnInit() {
    this.storage.clear();
  }

  onLogin() {
    if (this.userType === 'professor') {
      this.router.navigateByUrl('/prof-start');
    } else if (this.userType === 'student') {
      if (this.password.toLowerCase() === 'relcom') {
        // Redesigned
        this.router.navigateByUrl('/student-ui');
      } else {
        this.router.navigateByUrl('/student');
      }
    } else if (this.userType === 'TA') {
      this.router.navigateByUrl('/ta');
    }
  }

}
