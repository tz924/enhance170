import { Component, OnInit } from '@angular/core';
import { AppComponent, Course } from '../app.component';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  courses: Course[];

  constructor(private app: AppComponent) { }

  ngOnInit() {
    this.courses = [];

    this.courses.push({ department: 'CSE', id: 138, attendence: 123 });
    this.courses.push({ department: 'CSE', id: 160, attendence: 45 });
    this.courses.push({ department: 'CSE', id: 120, attendence: 60 });
  }

  onCourseClick(course: Course) {
    this.app.currentCourse = course;
  }

}
