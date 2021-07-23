import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {loadListAction, loadListResoultAction} from './cats.actions';
import {debounce, map, switchMap} from 'rxjs/operators';
import {CatsRepository} from './cats.repository';
import {CatListVO} from './cats.interfaces';
import {HandleErrorAction, toActionCreatorPayload} from '../../util';

@Injectable()
export class CatsEffects{
@Effect()
  LoadList: Observable<any> = this.actions.pipe(
ofType(loadListAction), debounce((action) => {
  return of().pipe(switchMap(() => of(action)));
    }), switchMap((action) => {
      return this.catsRepository.list().pipe(
      map((cats: CatListVO[]) => {
        return {payload: cats};
      })
        , toActionCreatorPayload(loadListResoultAction, HandleErrorAction )
      );
    })
  );

  constructor(private actions: Actions, private catsRepository: CatsRepository) {
  }
}
