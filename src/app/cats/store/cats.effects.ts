import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {loadDataAction, loadDataResoultAction, loadListAction, loadListResoultAction} from './cats.actions';
import {debounce, map, switchMap} from 'rxjs/operators';
import {CatsRepository} from './cats.repository';
import {CatListVO, CatVO} from './cats.interfaces';
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

  @Effect()
  LoadData: Observable<any> = this.actions.pipe(
    ofType(loadDataAction), debounce((action) => {
      return of().pipe(switchMap(() => of(action)));
    }), switchMap((action) => {
      return this.catsRepository.getCat(action.id - 1).pipe(
        map((cats: CatVO) => {
          return {payload: cats};
        })
        , toActionCreatorPayload(loadDataResoultAction, HandleErrorAction )
      );
    })
  );

  constructor(private actions: Actions, private catsRepository: CatsRepository) {
  }
}
