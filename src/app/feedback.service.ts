import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor() { }

  questionSubmitted = new EventEmitter<string>();
}
