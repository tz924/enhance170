import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Question, Course } from './app.component';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  defaultQuestions: Question[] = [
    {
      index: 1,
      content: 'Where can I find the course syllabus? \
      Is it on the course website, and if so where?',
      duration: 13,
      nbrAnswers: 3,
      nbrLikes: 10,
    },
    {
      index: 2,
      content: 'Is attendance being taken at the labs? What if we need to \
      miss a lab? Can we be excused?',
      duration: 4,
      nbrAnswers: 1,
      nbrLikes: 5,
    },
    {
      index: 3,
      content: 'Considering the various types of questions to avoid, what \
    if there is a necessity to find out about that data, say how often \
    they spend time watching TV?',
      duration: 1,
      nbrAnswers: 7,
      nbrLikes: 3,
    },
    {
      index: 3,
      content: 'What sort of consent form should we send out if we do \
      want to conduct an audio or video recording?',
      duration: 1,
      nbrAnswers: 2,
      nbrLikes: 3,
    },
    {
      index: 4,
      content: 'Is the point of view only talking about the problems \
    or does it suggest some sort of broad solution?',
      duration: 1,
      nbrAnswers: 0,
      nbrLikes: 1,
    },
    {
      index: 11,
      content: 'What are some strategies to finding a good team?',
      duration: 1,
      nbrAnswers: 1,
      nbrLikes: 0,
    }
  ];

  questions: Question[];

  // Courses
  defaultCourses: Course[] = [
    { 'name': 'CSE 138', 'size': 125 },
    { 'name': 'CSE 160', 'size': 75 },
    { 'name': 'CSE 120', 'size': 230 },
    { 'name': 'MGT 178', 'size': 100 },
    { 'name': 'MGT 16', 'size': 210 },
    { 'name': 'CSE 150', 'size': 275 },
    { 'name': 'CSE 90', 'size': 300 },
    { 'name': 'MGT 112', 'size': 150 },
    { 'name': 'MGT 187', 'size': 120 }
  ];

  courses: Course[];

  // Current course
  currentCourse: Course;

  constructor(private storage: LocalStorageService) { }

  initQuestions() {
    const questionsData = this.storage.retrieve('questions');

    if (!questionsData) {
      this.storage.store('questions', this.defaultQuestions);
      this.questions = this.defaultQuestions;
    } else {
      this.questions = questionsData;
    }

    return this.questions;
  }

  updateQuestions(questions: Question[]) {
    this.storage.store('questions', questions);
  }

  initCourses() {
    const coursesData = this.storage.retrieve('courses');

    if (!coursesData) {
      this.storage.store('courses', this.defaultCourses);
      this.courses = this.defaultCourses;
    } else {
      this.courses = coursesData;
    }

    return this.courses;
  }

  updateCourses(courses: Course[]) {
    this.storage.store('courses', courses);
  }

  initCurrentCourse() {
    const currentCourseData = this.storage.retrieve('currentCourse');

    if (!currentCourseData) {
      this.currentCourse = this.courses[0];
      this.storage.store('currentCourse', this.currentCourse);
    } else {
      this.currentCourse = currentCourseData;
    }

    return this.currentCourse;
  }

}
