import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Cocktail } from '../models/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private readonly cocktailApi = "assets/data.json";
  constructor(public http: HttpClient) { }

  public getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>(this.cocktailApi).pipe(
      tap(cocktail=>console.log('cocktails:', cocktail)),
      catchError(this.handleError)
    );
  }
  private handleError(err:HttpErrorResponse){

    if (err.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', err.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${err.status}, body was: `, err.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
