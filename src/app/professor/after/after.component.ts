
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent, Course } from '../../app.component';
@Component({
  selector: 'app-after',
  templateUrl: './after.component.html',
  styleUrls: ['./after.component.css']
})
export class AfterComponent implements OnInit {
  course: Course;

  constructor(private router: Router, private app: AppComponent) { }

  ngOnInit() {
    this.course = this.app.currentCourse;
  }

  onStart() {
    this.router.navigateByUrl('/professor');
  }


}
