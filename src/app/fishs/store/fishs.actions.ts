import {createAction, props} from '@ngrx/store';
import {FishListVO, FishVO} from './fishs.interfaces';

export  const loadListAction = createAction('[fishs] Load List');
export  const loadListResoultAction = createAction('[fishs] Load List Resoult', props<{ payload: FishListVO[] }>());
export  const loadDataAction = createAction('[fishs] Load Data', props<{id: number}>());
export  const loadDataResoultAction = createAction('[fishs] Load Data Resoult', props<{ payload: FishVO }>());
