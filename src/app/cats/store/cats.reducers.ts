import {CatListVO, CatVO} from './cats.interfaces';
import {loadDataResoultAction, loadListResoultAction} from './cats.actions';


export const catsFeatureName = 'cats';

export interface CatsState {
  listData: CatListVO[];
  editedData: CatVO;
}
export  const initialState: CatsState = {
  listData: [],
  editedData: null
};

export  function catsReducer<T, S>(state: CatsState, action: any): CatsState{
  switch (action.type) {
    case loadListResoultAction.type:
      return{...state, listData: action.payload};
    case loadDataResoultAction.type:
      return{...state, editedData: action.payload};
    default: {
      return state;
    }

  }
}
