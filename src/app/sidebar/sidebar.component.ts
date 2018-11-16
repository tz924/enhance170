import { Inject, Injectable, Component, OnInit } from '@angular/core';
import { AppComponent, Course } from '../app.component';
import { LocalStorageService } from 'ngx-webstorage';
import { DataService } from '../data.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

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
  name: string;
  size: number;
  courseModal: NgbModalRef;

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
      .subscribe(courses => this.courses = courses);

    this.storage.observe('currentCourse')
      .subscribe(currentCourse => this.currentCourse = currentCourse);
  }

  // Change the course
  onCourseClick(course: Course) {
    // Update course
    this.currentCourse = course;
    this.storage.store('currentCourse', this.currentCourse);
  }

  onCourseSubmit() {
    this.courses.push({ name: 'CSE 100', size: 50 });
    this.data.updateCourses(this.courses);
  }
}
