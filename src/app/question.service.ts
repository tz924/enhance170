import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Question } from './app.component';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  defaultQuestions: Question[] = [
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

  questions: Question[];

  constructor(protected localStorage: LocalStorage) {
    // Update questions
  }

  load() {
    return this.localStorage.getItem('questions');
  }

  push(question: Question) {
    this.localStorage.setItem('questions', question);



    // Update local storage
    // this.storage.set('questions', this.questions);
  }


}
