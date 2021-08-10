import {createAction, props} from '@ngrx/store';
import {CatListVO, CatVO} from './cats.interfaces';

export  const loadListAction = createAction('[cats] Load List');
export  const loadListResoultAction = createAction('[cats] Load List Resoult', props<{ payload: CatListVO[] }>());
export  const loadDataAction = createAction('[cats] Load Data', props<{id: number}>());
export  const loadDataResoultAction = createAction('[cats] Load Data Resoult', props<{ payload: CatVO }>());
