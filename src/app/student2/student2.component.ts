import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageService } from 'ngx-webstorage';
import { DataService } from '../data.service';
import { Question, Lecture, Answer, Course } from '../app.component';
import { ReversePipe } from 'ngx-pipes';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';

@Component({
  selector: 'app-student2',
  templateUrl: './student2.component.html',
  styleUrls: ['./student2.component.css'],
  providers: [ReversePipe],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(bounce))])
  ]
})
export class Student2Component implements OnInit {
  questions: Question[];
  liked: number[];
  answers: Answer[];
  checked: Question[];
  deleted: Question[];
  lecture: Lecture;
  course: Course;
  bounce: any;

  showQuestions: boolean;
  showChecked: boolean;
  showDeleted: boolean;

  questionForm: FormGroup;
  answerContent: FormControl;
  content: string;
  questionModal: NgbModalRef;
  answerModal: NgbModalRef;
  deleteModal: NgbModalRef;

  currentDelete: number;

  searchText: string;

  constructor(
    private feedbackService: FeedbackService,   // Service for questions
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private storage: LocalStorageService,
    private data: DataService,
    private reversePipe: ReversePipe) {
  }

  ngOnInit() {
    this.createQuestionForm();
    this.data.initCourses();
    this.course = this.data.initCurrentCourse();
    this.data.updateUserType('student');
    this.bounce = true;

    // Initialize necessary objects
    this.questions = [];
    this.liked = [];
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

    this.storage.observe('currentCourse')
      .subscribe((course: Course) => this.course = course);
  }

  hover() {
    this.bounce = !this.bounce;
  }

  // Modal
  openQModal(qModal) {
    this.questionModal = this.modalService.open(qModal, { centered: true });
  }

  openAModal(aModal, nbrAnswers) {
    this.answers = this.data.getAnswers(nbrAnswers);
    this.answerModal = this.modalService.open(aModal, { centered: true });
  }

  onLikeClick(question: Question) {
    if (!this.liked.includes(question.index)) {
      question.nbrLikes++;
      this.liked.push(question.index);
    }
  }

  onSortClick() {
    this.questions.sort((a, b) => (a.nbrLikes > b.nbrLikes) ? -1 : ((b.nbrLikes > a.nbrLikes) ? 1 : 0));
  }

  showNormalQuestions() {
    this.showQuestions = true;
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


  deleteQuestion(index: number, dModal) {
    this.currentDelete = index;
    this.deleteModal = this.modalService.open(dModal, { centered: true, size: 'lg', backdrop: 'static' });
  }

  deleteQuestionConfirm(dModal) {
    let question: Question;
    for (let i = 0; i < this.questions.length; i++) {
      if (this.questions[i].index === this.currentDelete) {
        question = this.questions.splice(i, 1)[0];
        this.data.updateQuestions(this.questions);
      }
    }

    // Reset liked
    for (let i = 0; i < this.liked.length - 1; i++) {
      if (this.liked[i] === this.currentDelete) {
        this.liked.splice(i, 1);
      }
    }

    this.deleted.push(question);

    this.deleteModal.dismiss();
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

    let maxIndex = 0;
    this.questions.forEach(question => {
      if (question.index > maxIndex) { maxIndex = question.index; }
    });

    this.questions.unshift({
      index: maxIndex + 1,
      content: content,
      duration: 0,
      nbrAnswers: 0,
      nbrLikes: 0
    });
    this.data.updateQuestions(this.questions);
    this.questionForm.reset();
    this.questionModal.close();
  }

  onAnswerLikeClick(answer: Answer) {
    answer.nbrLikes++;
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
