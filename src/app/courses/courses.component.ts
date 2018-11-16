import { Inject, Injectable, Component, OnInit } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {

  }

  ngOnInit() {
  }


}
