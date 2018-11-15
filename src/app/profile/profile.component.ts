import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent, Course } from '../../app.component';
import { CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
