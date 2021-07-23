import {createAction, props} from '@ngrx/store';
import {catsFeatureName} from './cats.reducers';
import {CatListVO} from './cats.interfaces';

export  const loadListAction = createAction('[cats] Load List');
export  const loadListResoultAction = createAction('[cats] Load List Resoult', props<{ payload: CatListVO[] }>());
