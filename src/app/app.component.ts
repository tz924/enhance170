import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'enhance170';
}

export interface Course {
  name: string;
  size: number;
}

export interface Question {
  index: number;
  content: string;
  duration: number;
  nbrAnswers: number;
  nbrLikes: number;
}

export interface Lecture {
  title: string;
  time: Date;
  nbrOnline: number;
}

export interface Answer {
  index: number;
  content: string;
  duration: number;
  nbrLikes: number;
}
