import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  questionForm: FormGroup;
  content: string;

  constructor(
    private feedbackService: FeedbackService,   // Service for questions
    private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  // Form handlers
  createForm() {
    this.questionForm = this.formBuilder.group({
      content: ['', Validators.required]
    });
  }

  onQuestionSubmit(content: string) {
    this.feedbackService.questionSubmitted.emit(content);
    this.questionForm.reset();
  }

}
