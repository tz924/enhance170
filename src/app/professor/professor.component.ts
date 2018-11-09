import { Component, OnInit, Query } from '@angular/core';
import { FeedbackService } from '../feedback.service';

import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

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

export class ProfessorComponent implements OnInit {

  questions: Question[];
  checked: Question[];
  deleted: Question[];
  lecture: Lecture;
  showQuestions: boolean;
  showChecked: boolean;
  showDeleted: boolean;

  questionState: string;

  constructor(private feedbackService: FeedbackService) {
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
    this.questions = [];
    this.checked = [];
    this.deleted = [];
    this.showQuestions = true;
    this.showChecked = false;
    this.showDeleted = false;

    this.questionState = 'move';

    this.lecture = {
      title: 'Lecture 1',
      time: new Date(2018, 10, 24, 10, 33, 30, 0),
      nbrOnline: 121
    };

    // Make up some fake datas
    this.questions.push({
      index: 1,
      content: 'Compliment interested discretion estimating on stimulated \
      apartments. Dear so sing when in find read of call. As distrusts \
      behaviour abilities defective is. Never at water me might.',
      duration: 13,
      nbrAnswers: 12,
      nbrLikes: 10,
    });

    this.questions.push({
      index: 2,
      content: 'Compliment interested discretion estimating on stimulated \
      apartments oh. Dear so sing when in find read of call. As distrusts \
      behaviour abilities defective is. Never at water me might.',
      duration: 4,
      nbrAnswers: 1,
      nbrLikes: 10,
    });

    this.questions.push({
      index: 3,
      content: 'Compliment interested discretion estimating on stimulated \
      apartments oh. Dear so sing when in find read of call. As distrusts \
      behaviour abilities defective is. Never at water me might.',
      duration: 1,
      nbrAnswers: 1,
      nbrLikes: 10,
    });

    this.questions.push({
      index: 3,
      content: 'Compliment interested discretion estimating on stimulated \
      apartments oh. Dear so sing when in find read of call. As distrusts \
      behaviour abilities defective is. Never at water me might.',
      duration: 1,
      nbrAnswers: 1,
      nbrLikes: 10,
    });

    this.questions.push({
      index: 3,
      content: 'Compliment interested discretion estimating on stimulated \
      apartments oh. Dear so sing when in find read of call. As distrusts \
      behaviour abilities defective is. Never at water me might.',
      duration: 1,
      nbrAnswers: 1,
      nbrLikes: 10,
    });

    this.questions.push({
      index: 11,
      content: 'Compliment interested discretion estimating on stimulated \
      apartments oh. Dear so sing when in find read of call. As distrusts \
      behaviour abilities defective is. Never at water me might.',
      duration: 1,
      nbrAnswers: 1,
      nbrLikes: 10,
    });

  }

  checkQuestion(index: number) {
    let question: Question;
    for (let i = 0; i < this.questions.length; i++) {
      if (this.questions[i].index === index) {
        question = this.questions.splice(i, 1)[0];
      }
    }

    this.checked.push(question);
  }

  deleteQuestion(index: number) {
    let question: Question;
    for (let i = 0; i < this.questions.length; i++) {
      if (this.questions[i].index === index) {
        question = this.questions.splice(i, 1)[0];
      }
    }

    this.deleted.push(question);
  }

  onLikeClick(question: Question) {
    question.nbrLikes++;
  }

  showNormalQuestions() {
    this.showQuestions = !this.showQuestions;
    this.showChecked = false;
    this.showDeleted = false;
  }

  showCheckedQuestions() {
    this.showChecked = true;
    this.showDeleted = false;
    this.showQuestions = false;
  }

  showDeletedQuestions() {
    this.showDeleted = true;
    this.showChecked = false;
    this.showQuestions = false;
  }

  onQuestionClick() {
    // Change it to expanded
  }

  onMoreClick() {
    this.questions.push({
      index: Math.floor(Math.random()),
      content: 'Compliment interested discretion estimating on stimulated \
      apartments oh. Dear so sing when in find read of call. As distrusts \
      behaviour abilities defective is. Never at water me might.',
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

interface Question {
  index: number;
  content: string;
  duration: number;
  nbrAnswers: number;
  nbrLikes: number;
}

interface Lecture {
  title: string;
  time: Date;
  nbrOnline: number;
}
