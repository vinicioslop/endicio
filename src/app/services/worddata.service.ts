import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordDataService {
  private wordSubject = new Subject<any>();
  word = this.wordSubject.asObservable();

  setState(newWord: any) {
    this.wordSubject.next(newWord);
  }
}
