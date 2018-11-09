import { Injectable, EventEmitter } from '@angular/core';
import { Course } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  currentCourse = new EventEmitter<Course>();
}
