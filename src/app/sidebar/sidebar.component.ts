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

  // For highlighting
  selectedIndex: number;

  // Add Course
  subject: string;
  number: string;
  capacity: number;


  constructor(private app: AppComponent,
    private storage: LocalStorageService,
    private modalService: NgbModal,
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
  onCourseClick(course: Course, index: number) {
    // Update course
    this.selectedIndex = index;
    this.currentCourse = course;
    this.storage.store('currentCourse', this.currentCourse);
  }

  onCourseSubmit(subject: string, number: string, capacity: number) {
    const newCourse = { name: subject + ' ' + number, size: capacity };
    let unique = true;

    // Make Sure it's unique
    this.courses.forEach(course => {
      if (course.name === newCourse.name) {
        unique = false;
      }
    });

    if (unique) {
      this.courses.push(newCourse);
      this.data.updateCourses(this.courses);
    } else {
      alert('You already have that course');
    }
    this.courseModal.dismiss();
  }

  // Modal
  openCModal(cModal) {
    this.courseModal = this.modalService.open(cModal, { centered: true });
  }
}
