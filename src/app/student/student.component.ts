import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageService } from 'ngx-webstorage';
import { DataService } from '../data.service';
import { Question, Lecture, Answer } from '../app.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  questions: Question[];
  answers: Answer[];
  checked: Question[];
  deleted: Question[];
  lecture: Lecture;

  showQuestions: boolean;
  showChecked: boolean;
  showDeleted: boolean;

  questionForm: FormGroup;
  answerContent: FormControl;
  content: string;
  questionModal: NgbModalRef;
  answerModal: NgbModalRef;

  constructor(
    private feedbackService: FeedbackService,   // Service for questions
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private storage: LocalStorageService,
    private data: DataService) {
    this.createQuestionForm();
  }

  ngOnInit() {
    // Initialize necessary objects
    this.questions = [];
    this.checked = [];
    this.deleted = [];
    this.showQuestions = true;
    this.showChecked = false;
    this.showDeleted = false;
    this.answerContent = new FormControl('');

    this.lecture = this.data.initLecture();

    // Make up some fake datas
    this.questions = this.data.initQuestions();

    // Fake data for answers
    this.answers = this.data.initAnswers();

    // Sync with local storage
    this.storage.observe('questions').subscribe(e => {
      this.questions = this.storage.retrieve('questions');
    });
  }

  // Modal
  openQModal(qModal) {
    this.questionModal = this.modalService.open(qModal, { centered: true });
  }

  openAModal(aModal) {
    this.answerModal = this.modalService.open(aModal, { centered: true });
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

  onMoreClick() {
    this.questions.push({
      index: Math.floor(Math.random()),
      content: 'new questions',
      duration: Math.floor(Math.random() * 10) + Math.floor(Math.random()),
      nbrAnswers: Math.floor(Math.random()),
      nbrLikes: Math.floor(Math.random() * 10) + Math.floor(Math.random()),
    });
  }

  // Form handlers
  createQuestionForm() {
    this.questionForm = this.formBuilder.group({
      content: ['', Validators.required]
    });
  }

  onQuestionSubmit(content: string) {
    this.feedbackService.questionSubmitted.emit(content);

    this.questions.push({
      index: this.questions.length + 1,
      content: content,
      duration: 0,
      nbrAnswers: 0,
      nbrLikes: 0
    });
    this.data.updateQuestions(this.questions);

    this.questionForm.reset();
    this.questionModal.close();
  }

  onAnswerSubmit(answerContent: string) {
    this.answers.push({
      index: this.answers.length + 1,
      content: answerContent,
      duration: 1,
      nbrLikes: 0
    });
  }

}
