import {Injectable} from '@angular/core';
import {DogService} from '../dog.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {loadDogByIDAction, loadDogByIDResultAction} from './app.actions';
import {map, mergeMap} from 'rxjs/operators';

@Injectable()
export class AppEffects {

  loadDogByID = createEffect(() => this.actions$.pipe(
    ofType(loadDogByIDAction.type),
    mergeMap((action) => this.dogService.getDog(action.id)
      .pipe(
        map(dog => (loadDogByIDResultAction({payload: dog})))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private dogService: DogService
  ) {}
}
/*
this.dogService.getDog(action.id)
  .subscribe(dog => this.dog = dog);
*/
