import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Word } from '../word/word.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] :
        ['msg-success']
    })
  }

  read(word: string): Observable<Word[]> {
    return this.http.get<Word[]>(this.apiUrl+word).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    
    return EMPTY;
  }
}
