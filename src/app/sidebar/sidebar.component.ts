import { Component, OnInit } from '@angular/core';
import { AppComponent, Course } from '../app.component';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  courses: Course[];

  constructor(private app: AppComponent,
    private courseService: CourseService) { }

  ngOnInit() {
    this.courses = [];
    const defaultCourse = { department: 'CSE', id: 138, attendence: 123 };

    this.courses.push(defaultCourse);
    this.courses.push({ department: 'CSE', id: 160, attendence: 45 });
    this.courses.push({ department: 'CSE', id: 120, attendence: 60 });
    this.courseService.currentCourse.emit(defaultCourse);
  }

  onCourseClick(course: Course) {
    this.courseService.currentCourse.emit(course);
  }

}
