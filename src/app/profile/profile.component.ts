import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { DataService } from '../data.service';
import { Course } from '../app.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  course: Course;

  constructor(
    private storage: LocalStorageService,
    private data: DataService
  ) { }

  ngOnInit() {
    this.course = this.data.initCurrentCourse();
    this.storage.observe('currentCourse')
      .subscribe((course: Course) => this.course = course);
  }

}
