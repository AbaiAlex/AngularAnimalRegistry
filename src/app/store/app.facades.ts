import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './app.reducers';
import {selectChangesCounter, selectEditedDog} from './app.selectors';
import {Observable} from 'rxjs';
import {
  decrementChangesCounterAction,
  incrementChangesCounterAction,
  loadDogByIDAction,
  loadDogByIDResultAction,
  resetChangesCounterAction
} from './app.actions';
import {Dog} from '../dog';
import {filter, tap} from 'rxjs/operators';

@Injectable()
export class AppFacade {
  public changesCounterObservable: Observable<number>  = this.store.select(selectChangesCounter);
  public selectEditedDogObservable: Observable<Dog> = this.store.select(selectEditedDog).pipe(
    filter(value => value !== null),
    tap((dog) => { console.log(JSON.stringify(dog)); }));
  constructor(private store: Store<AppState>) {}

  incrementChangesCounter(diff: number): void {
    this.store.dispatch(incrementChangesCounterAction({diff}));
  }

  decrementChangesCounter(diff: number): void {
    this.store.dispatch(decrementChangesCounterAction({diff}));
  }

  resetChangesCounter(): void {
    this.store.dispatch( resetChangesCounterAction());
  }

  loadDogByID(id: number): void {
    this.store.dispatch( loadDogByIDAction({id}));
  }

  resetLastEditedDog(): void {
    this.store.dispatch( loadDogByIDResultAction({payload: null}));
  }
}
