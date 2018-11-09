import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent, Course } from '../../app.component';
import { CourseService } from 'src/app/course.service';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  course: Course;

  constructor(private router: Router, private app: AppComponent,
    private courseService: CourseService) {

    this.courseService.currentCourse.subscribe(
      (course: Course) => {
        this.course = course;
      }
    );

  }

  ngOnInit() {
    this.course = this.app.currentCourse;
  }

  onStart() {
    this.router.navigateByUrl('/professor');
  }

}
