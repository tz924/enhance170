import { Injectable } from '@angular/core';
import { Question, Course, Lecture, Answer } from './app.component';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Lecture
  defaultLecture: Lecture = {
    title: 'Lecture 1',
    time: new Date(2018, 10, 24, 10, 33, 30, 0),
    nbrOnline: 121
  };

  lecture: Lecture;

  // Questions
  defaultQuestions: Question[] = [
    {
      index: 1,
      content: 'Where can I find the course syllabus? \
      Is it on the course website, and if so where?',
      duration: 1,
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
      duration: 5,
      nbrAnswers: 7,
      nbrLikes: 3,
    },
    {
      index: 4,
      content: 'What sort of consent form should we send out if we do \
      want to conduct an audio or video recording?',
      duration: 7,
      nbrAnswers: 2,
      nbrLikes: 3,
    },
    {
      index: 5,
      content: 'Is the point of view only talking about the problems \
    or does it suggest some sort of broad solution?',
      duration: 9,
      nbrAnswers: 0,
      nbrLikes: 1,
    },
    {
      index: 6,
      content: 'What are some strategies to finding a good team?',
      duration: 11,
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

  // Answers
  defaultAnswers: Answer[] = [
    {
      index: 1,
      content: 'The syllabus is on the website underneath the labs.',
      duration: 3,
      nbrLikes: 10,
    },
    {
      index: 2,
      content: 'You are allowed to be excused from maximum two labs, if \
      you have good reasons for it.',
      duration: 16,
      nbrLikes: 10,
    },
  ];

  answers: Answer[];

  // Students
  students = [
    { 'PID': 'A92111691', 'name': 'Peter Wang', 'time': '13:51 PM', 'questions': '0' },
    { 'PID': 'A27818929', 'name': 'Jenna Larson', 'time': '13:55 PM', 'questions': '2' },
    { 'PID': 'A73629289', 'name': 'Dave Ross', 'time': '13:57 PM', 'questions': '1' },
    { 'PID': 'A17382999', 'name': 'Jody Bird', 'time': '13:59 PM', 'questions': '0' },
    { 'PID': 'A16253423', 'name': 'Manny McKenzie', 'time': '14:00 PM', 'questions': '3' },
    { 'PID': 'A98987625', 'name': 'Jonathan Ohlson', 'time': '14:00 PM', 'questions': '1' },
    { 'PID': 'A92731691', 'name': 'Clara Waltz', 'time': '14:01 PM', 'questions': '6' },
    { 'PID': 'A92823711', 'name': 'Anna Finnigan', 'time': '14:01 PM', 'questions': '2' },
    { 'PID': 'A15263772', 'name': 'Sophia Kageman', 'time': '14:04 PM', 'questions': '0' },
    { 'PID': 'A88372613', 'name': 'Sara Webber', 'time': '14:05 PM', 'questions': '1' },
    { 'PID': 'A33546278', 'name': 'Kirsty Larsson', 'time': '14:11 PM', 'questions': '0' }
  ];

  // Special questions
  deleted: Question[];
  checked: Question[];

  userType: string;

  constructor(private storage: LocalStorageService) { }

  // Question API
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

  // Course API
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

  // Lecture API
  initLecture() {
    // const lectureData = this.storage.retrieve('lecture');

    // if (!lectureData) {
    //   this.lecture = this.defaultLecture;
    //   this.storage.store('lecture', this.lecture);
    // } else {
    //   this.lecture = lectureData;
    // }

    return this.defaultLecture;
  }

  // Answers API
  initAnswers() {
    const answersData = this.storage.retrieve('answers');

    if (!answersData) {
      this.storage.store('answers', this.defaultAnswers);
      this.answers = this.defaultAnswers;
    } else {
      this.answers = answersData;
    }

    return this.answers;
  }

  updateAnswers(answers: Question[]) {
    this.storage.store('answers', answers);
  }

  getAnswers(nbrAnswers: number) {
    const temp: Answer[] = [];
    for (let i = 1; i <= nbrAnswers; i++) {
      temp.push({
        index: i,
        content: 'The Last Answer" is a science-fiction short story by American writer Isaac Asimov.',
        duration: Math.floor(Math.random()),
        nbrLikes: Math.floor(Math.random()),
      });
    }
    this.answers = temp;
    this.storage.store('answers', this.answers);
    return temp;
  }

  // Special List
  initDeleted() {
    const deletedData = this.storage.retrieve('deleted');

    if (!deletedData) {
      this.deleted = [];
      this.storage.store('deleted', this.deleted);
    } else {
      this.deleted = deletedData;
    }

    return this.deleted;
  }

  updateDeleted(deleted: Question[]) {
    this.storage.store('deleted', deleted);
  }

  initChecked() {
    const checkedData = this.storage.retrieve('checked');

    if (!checkedData) {
      this.checked = [];
      this.storage.store('checked', this.checked);
    } else {
      this.checked = checkedData;
    }

    return this.checked;
  }

  updateChecked(checked: Question[]) {
    this.storage.store('checked', checked);
  }

  // User Type API
  initUserType(userType: string) {
    const userTypeData = this.storage.retrieve('userType');

    if (!userTypeData) {
      this.userType = userType;
      this.storage.store('userType', this.userType);
    } else {
      this.userType = userTypeData;
    }

    return this.userType;
  }

  getUserType() {
    if (this.storage.retrieve('userType')) {
      return this.storage.retrieve('userType').toLowerCase();
    }
    return this.storage.retrieve('userType');
  }

  updateUserType(userType: string) {
    this.storage.store('userType', userType);
  }

}
