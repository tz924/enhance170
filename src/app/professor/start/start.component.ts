import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent, Course } from '../../app.component';
import { CourseService } from 'src/app/course.service';
import { LocalStorageService } from 'ngx-webstorage';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  course: Course;

  constructor(
    private router: Router, private app: AppComponent,
    private storage: LocalStorageService
  ) {
    this.course = this.storage.retrieve('currentCourse');
  }

  ngOnInit() {
    this.storage.observe('currentCourse')
      .subscribe((course: Course) => this.course = course);
  }

  onStart() {
    this.router.navigateByUrl('/professor');
  }

}
