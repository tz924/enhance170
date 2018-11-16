import { Injectable, EventEmitter } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(protected localStorage: LocalStorage) { }

  questionSubmitted = new EventEmitter<string>();
}
