import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {loadDataAction, loadDataResoultAction, loadListAction, loadListResoultAction} from '../../fishs/store/fishs.actions';
import {debounce, map, switchMap} from 'rxjs/operators';
import {HandleErrorAction, toActionCreatorPayload} from '../../util';
import {FishsRepository} from './fishs.repository';
import {FishListVO, FishVO} from './fishs.interfaces';

@Injectable()
export class FishsEffects{
  @Effect()
  LoadList: Observable<any> = this.actions.pipe(
    ofType(loadListAction), debounce((action) => {
      return of().pipe(switchMap(() => of(action)));
    }), switchMap((action) => {
      return this.fishsRepository.list().pipe(
        map((fishs: FishListVO[]) => {
          return {payload: fishs};
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
      return this.fishsRepository.getFish(action.id - 1).pipe(
        map((fishs: FishVO) => {
          return {payload: fishs};
        })
        , toActionCreatorPayload(loadDataResoultAction, HandleErrorAction )
      );
    })
  );

  constructor(private actions: Actions, private fishsRepository: FishsRepository) {
  }
}
