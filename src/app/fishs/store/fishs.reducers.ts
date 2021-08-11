import {loadDataResoultAction, loadListResoultAction} from '../../fishs/store/fishs.actions';
import {FishListVO, FishVO} from './fishs.interfaces';

export const fishsFeatureName = 'fishs';

export interface FishsState {
  listData: FishListVO[];
  editedData: FishVO;
}
export  const initialState: FishsState = {
  listData: [],
  editedData: null
};

export  function fishsReducer<T, S>(state: FishsState, action: any): FishsState{
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
