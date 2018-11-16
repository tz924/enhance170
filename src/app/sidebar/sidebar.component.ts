import { Inject, Injectable, Component, OnInit } from '@angular/core';
import { AppComponent, Course } from '../app.component';
import { CourseService } from '../course.service';
import { LocalStorageService } from 'ngx-webstorage';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

@Injectable()
export class SidebarComponent implements OnInit {

  defaultCourses: Course[];
  courses: Course[];
  currentCourse: Course;

  constructor(private app: AppComponent,
    private storage: LocalStorageService,
    private data: DataService) { }

  ngOnInit() {
    // Set up courses
    this.courses = this.data.initCourses();

    // this.courses.forEach(x => console.log(x));

    // Set up current course
    this.currentCourse = this.data.initCurrentCourse();

    // console.log(this.currentCourse);

    this.storage.observe('courses')
      .subscribe((courses) => console.log('new courses', courses));

    this.storage.observe('currentCourse')
      .subscribe((course) => console.log('new current course', course));
  }

  // Change the course
  onCourseClick(course: Course) {
    // Update course
    this.currentCourse = course;
    this.storage.store('currentCourse', this.currentCourse);
  }

}
