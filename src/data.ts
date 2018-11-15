import {Component, OnInit} from '@angular/core';


/** Course Information */
var courseData = [
    {'name': 'CSE 138', 'size': '125'},
    {'name': 'CSE 160', 'size': '75'},
    {'name': 'CSE 120', 'size': '230'},
    {'name': 'MGT 178', 'size': '100'},
    {'name': 'MGT 16', 'size': '210'},
    {'name': 'CSE 150', 'size': '275'},
    {'name': 'CSE 90', 'size': '300'},
    {'name': 'MGT 112', 'size': '150'},
    {'name': 'MGT 187', 'size': '120'},
];


/** Student Information */
var studentData = [
    {'PID': 'A92111691', 'name': 'Peter Wang', 'time': '13:51 PM', 'questions': '0'},
    {'PID': 'A27818929', 'name': 'Jenna Larson', 'time': '13:55 PM', 'questions': '2'},
    {'PID': 'A73629289', 'name': 'Dave Ross', 'time': '13:57 PM', 'questions': '1'},
    {'PID': 'A17382999', 'name': 'Jody Bird', 'time': '13:59 PM', 'questions': '0'},
    {'PID': 'A16253423', 'name': 'Manny McKenzie', 'time': '14:00 PM', 'questions': '3'},
    {'PID': 'A98987625', 'name': 'Jonathan Ohlson', 'time': '14:00 PM', 'questions': '1'},
    {'PID': 'A92731691', 'name': 'Clara Waltz', 'time': '14:01 PM', 'questions': '6'},
    {'PID': 'A92823711', 'name': 'Anna Finnigan', 'time': '14:01 PM', 'questions': '2'},
    {'PID': 'A15263772', 'name': 'Sophia Kageman', 'time': '14:04 PM', 'questions': '0'},
    {'PID': 'A88372613', 'name': 'Sara Webber', 'time': '14:05 PM', 'questions': '1'},
    {'PID': 'A33546278', 'name': 'Kirsty Larsson', 'time': '14:11 PM', 'questions': '0'},
];


export class App implements OnInit {

  /*questions: Question[];
  checked: Question[];
  deleted: Question[];*/
  lecture: Lecture;
  showQuestions: boolean;
  showChecked: boolean;
  showDeleted: boolean;
  questionState: string;
  answers: Answers[];

  constructor () {
  }

  ngOnInit() {
    // Initialize necessary objects
    this.questions = [];
    this.checked = [];
    this.deleted = [];
    this.showQuestions = true;
    this.showChecked = false;
    this.showDeleted = false;
    this.questionState = 'move';
    this.answers = [];

    this.lecture = {
      title: 'Lecture 1',
      time: new Date(2018, 10, 24, 10, 33, 30, 0),
      nbrOnline: 121
    };

    /** Question Information */
    this.questions.push({
      index: 1,
      content: 'Where can I find the course syllabus? \
      Is it on the course website, and if so where?',
      duration: 13,
      nbrAnswers: 3,
      nbrLikes: 10,
    });

    this.questions.push({
      index: 2,
      content: 'Is attendance being taken at the labs? What if we need to \
      miss a lab? Can we be excused?',
      duration: 4,
      nbrAnswers: 1,
      nbrLikes: 5,
    });

    this.questions.push({
      index: 3,
      content: 'Considering the various types of questions to avoid, what \
      if there is a necessity to find out about that data, say how often \
      they spend time watching TV?',
      duration: 1,
      nbrAnswers: 7,
      nbrLikes: 3,
    });

    this.questions.push({
      index: 3,
      content: 'What sort of consent form should we send out if we do \
      want to conduct an audio or video recording?',
      duration: 1,
      nbrAnswers: 2,
      nbrLikes: 3,
    });

    this.questions.push({
      index: 3,
      content: 'Is the point of view only talking about the problems \
      or does it suggest some sort of broad solution?',
      duration: 1,
      nbrAnswers: 0,
      nbrLikes: 1,
    });

    this.questions.push({
      index: 11,
      content: 'What are some strategies to finding a good team?',
      duration: 1,
      nbrAnswers: 1,
      nbrLikes: 0,
    });

    /** Answer Information */
    this.answers = [
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
  }
}
