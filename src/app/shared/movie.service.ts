import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  addMovie(movie: Movie): Observable<any> {
    return this.http.post<Movie>('http://localhost:3000/api/create-movie', movie, this.httpOptions)
      .pipe(
        catchError(this.handleError<Movie>('Add Movie'))
      );
  }

  getMovie(id): Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:3000/api/get-movie/' + id)
      .pipe(
        tap(_ => console.log(`Movie fetched: ${id}`)),
        catchError(this.handleError<Movie[]>(`Get Movie id=${id}`))
      );
  }

  getMovieList(): Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:3000/api')
      .pipe(
        tap(movies => console.log('Movies fetched!')),
        catchError(this.handleError<Movie[]>('Get Movies', []))
      );
  }

  updateMovie(id, movie: Movie): Observable<any> {
    return this.http.put('http://localhost:3000/api/update-movie/' + id, movie, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Movie updated: ${id}`)),
        catchError(this.handleError<Movie[]>('Update Movie'))
      );
  }

  deleteMovie(id): Observable<Movie[]> {
    return this.http.delete<Movie[]>('http://localhost:3000/api/delete-movie/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Movie deleted: ${id}`)),
        catchError(this.handleError<Movie[]>('Delete Movie'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}