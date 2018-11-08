import { Component, OnInit, Query } from '@angular/core';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  questions: Question[];
  checked: Question[];
  deleted: Question[];
  lecture: Lecture;
  showQuestions: boolean;
  showChecked: boolean;
  showDeleted: boolean;

  constructor() { }

  ngOnInit() {
    // Initialize necessary objects
    this.questions = [];
    this.checked = [];
    this.deleted = [];
    this.showQuestions = false;
    this.showChecked = false;
    this.showDeleted = false;

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
