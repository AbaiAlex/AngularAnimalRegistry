import { Injectable } from '@angular/core';
import {Dog, DogToys} from './dog';
import {Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AppFacade} from './store/app.facades';
import {tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DogService {
  constructor( private http: HttpClient, private appFacade: AppFacade) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private dogsUrl = 'api/dogs';  // URL to web api
  /*getDogs(): Observable<Dog[]> {
    const dogs = of(DOGS);
    return dogs;
  }*/
  getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.dogsUrl);
  }
  getDog(id: number): Observable<Dog> {
    const url = `${this.dogsUrl}/${id}`;
    return this.http.get<Dog>(url);
  }

  /*UPDATE*/
  updateDog(dog: Dog): Observable<any> {
    console.log(dog);
    return this.http.put(this.dogsUrl, dog, this.httpOptions).pipe(tap(x => {
      this.appFacade.incrementChangesCounter(1);
    }));
  }
  /*Create*/
  addDog(dog: Dog): Observable<Dog> {
    return this.http.post<Dog>(this.dogsUrl, dog, this.httpOptions);
  }
  /*Delete*/
  deleteDog(id: number): Observable<Dog> {
    const url = `${this.dogsUrl}/${id}`;
    return this.http.delete<Dog>(url, this.httpOptions);
  }

}
