import { Component, OnInit, Query, Injectable, Inject } from '@angular/core';
import { Question, Lecture } from '../app.component';
import { FeedbackService } from '../feedback.service';

import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { LocalStorageService } from 'ngx-webstorage';
import { DataService } from '../data.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [

      // Animation States
      state('move', style({
        opacity: 1
      })),

      state('moved', style({
        opacity: 1
      })),

      // Transition Definition
      transition('moved => move',
        animate('1500ms', keyframes([
          style({ opacity: 1 }),
          style({ opacity: 0 }),
          style({ opacity: 1 }),
        ]))),

      transition('move => moved',
        animate('1500ms', keyframes([
          style({ opacity: 1 }),
          style({ opacity: 0 }),
          style({ opacity: 1 }),
        ]))),

    ])]
})

@Injectable()
export class ProfessorComponent implements OnInit {

  defaultQuestions: Question[];
  questions: Question[];
  checked: Question[];
  deleted: Question[];
  lecture: Lecture;
  showQs: boolean;
  showChecked: boolean;
  showDeleted: boolean;
  questionState: string;

  constructor(
    private feedbackService: FeedbackService,
    private data: DataService,
    private storage: LocalStorageService,
  ) {
    this.feedbackService.questionSubmitted.subscribe(
      (question: string) => {
        this.onNewQuestion();
        this.questions.push({
          index: this.questions.length,
          content: question,
          duration: 0,
          nbrAnswers: 0,
          nbrLikes: 0
        });
      }
    );
  }

  ngOnInit() {
    // Initialize necessary objects

    this.checked = [];
    this.deleted = [];
    this.showQs = true;
    this.showChecked = false;
    this.showDeleted = false;
    this.questionState = 'move';

    this.lecture = {
      title: 'Lecture 1',
      time: new Date(2018, 10, 24, 10, 33, 30, 0),
      nbrOnline: 121
    };

    this.defaultQuestions = [
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

    // Update questions
    this.questions = this.data.initQuestions();

    // Update local storage on Change
    this.storage.observe('questions').subscribe(
      this.questions = this.storage.retrieve('questions')
    );
  }

  checkQuestion(index: number) {
    let question: Question;
    for (let i = 0; i < this.questions.length; i++) {
      if (this.questions[i].index === index) {
        question = this.questions.splice(i, 1)[0];
        this.data.updateQuestions(this.questions);
      }
    }

    this.checked.push(question);
  }

  deleteQuestion(index: number) {
    let question: Question;
    for (let i = 0; i < this.questions.length; i++) {
      if (this.questions[i].index === index) {
        question = this.questions.splice(i, 1)[0];
        this.data.updateQuestions(this.questions);
      }
    }

    this.deleted.push(question);
  }

  onLikeClick(question: Question) {
    question.nbrLikes++;
  }

  showQuestions() {
    this.showQs = !this.showQs;
    this.showChecked = false;
    this.showDeleted = false;
  }

  showCheckedQuestions() {
    this.showChecked = true;
    this.showDeleted = false;
    this.showQs = false;
  }

  showDeletedQuestions() {
    this.showDeleted = true;
    this.showChecked = false;
    this.showQs = false;
  }

  onQuestionClick() {
    // Change it to expanded
  }

  onMoreClick() {
    this.questions.push({
      index: Math.floor(Math.random()),
      content: 'New question',
      duration: Math.floor(Math.random() * 10) + Math.floor(Math.random()),
      nbrAnswers: Math.floor(Math.random()),
      nbrLikes: Math.floor(Math.random() * 10) + Math.floor(Math.random()),
    });
  }

  // New question
  onNewQuestion() {
    this.questionState = (this.questionState === 'move' ? 'moved' : 'move');
  }

}
