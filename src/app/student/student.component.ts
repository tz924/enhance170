import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  questions: Question[];
  checked: Question[];
  deleted: Question[];
  lecture: Lecture;
  showQuestions: boolean;
  showChecked: boolean;
  showDeleted: boolean;

  questionForm: FormGroup;
  content: string;
  questionModal: NgbModalRef;

  constructor(
    private feedbackService: FeedbackService,   // Service for questions
    private formBuilder: FormBuilder,
    private modalService: NgbModal) {
    this.createForm();
  }

  ngOnInit() {
    // Initialize necessary objects
    this.questions = [];
    this.checked = [];
    this.deleted = [];
    this.showQuestions = true;
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

  // Modal
  openVerticallyCentered(qModal) {
    this.questionModal = this.modalService.open(qModal, { centered: true });
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

  // Form handlers
  createForm() {
    this.questionForm = this.formBuilder.group({
      // content: ['', Validators.required]
      content: ['', Validators.required]
    });
  }

  onQuestionSubmit(content: string) {
    this.feedbackService.questionSubmitted.emit(content);
    this.questionForm.reset();
    this.questionModal.close();
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
