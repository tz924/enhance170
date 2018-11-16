
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../../app.component';
import { DataService } from 'src/app/data.service';
import { LocalStorageService } from 'ngx-webstorage';
@Component({
  selector: 'app-after',
  templateUrl: './after.component.html',
  styleUrls: ['./after.component.css']
})
export class AfterComponent implements OnInit {
  course: Course;

  constructor(private router: Router,
    private data: DataService,
    private storage: LocalStorageService) {
    this.course = this.data.initCurrentCourse();
  }

  ngOnInit() {
    this.storage.observe('currentCourse')
      .subscribe((course: Course) => this.course = course);
  }

  onStart() {
    this.router.navigateByUrl('/professor');
  }

}
