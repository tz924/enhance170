import { Component, OnInit, Query, Injectable, Inject } from '@angular/core';
import { Question, Lecture, Course } from '../app.component';
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

  questions: Question[];
  checked: Question[];
  deleted: Question[];
  lecture: Lecture;
  currentCourse: Course;
  showQs: boolean;
  showChecked: boolean;
  showDeleted: boolean;
  questionState: string;
  pdfSource: string;
  deleting: boolean;

  constructor(
    private feedbackService: FeedbackService,
    private data: DataService,
    private storage: LocalStorageService,
  ) {
    this.feedbackService.questionSubmitted.subscribe(
      (question: string) => {

        if (!this.deleting) {
          this.onNewQuestion();
        } else {
          this.deleting = false;
        }

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
    this.checked = this.data.initChecked();
    this.deleted = this.data.initDeleted();
    this.showQs = true;
    this.showChecked = false;
    this.showDeleted = false;
    this.questionState = 'move';

    if (this.storage.retrieve('pdfLink')) {
      this.pdfSource = this.storage.retrieve('pdfLink');
    } else {
      this.pdfSource = 'assets/test.pdf';
    }

    this.lecture = this.data.initLecture();
    this.currentCourse = this.data.initCurrentCourse();

    // Update questions
    this.questions = this.data.initQuestions();

    // Update local storage on Change
    this.storage.observe('questions').subscribe(e => {
      this.questions = this.storage.retrieve('questions');
      if (!this.deleting) {
        this.onNewQuestion();
      } else {
        this.deleting = false;
      }
    });

    this.storage.observe('deleted').subscribe(e => {
      this.deleted = this.storage.retrieve('deleted');
    });

    this.storage.observe('checked').subscribe(e => {
      this.checked = this.storage.retrieve('checked');
    });
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
    this.data.updateChecked(this.checked);
  }

  deleteQuestion(index: number) {
    let question: Question;
    this.deleting = true;
    for (let i = 0; i < this.questions.length; i++) {
      if (this.questions[i].index === index) {
        question = this.questions.splice(i, 1)[0];
        this.data.updateQuestions(this.questions);
      }
    }
    this.deleted.push(question);
    this.data.updateDeleted(this.deleted);
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
