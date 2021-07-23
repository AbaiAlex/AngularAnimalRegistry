import {ActionReducerMap, createReducer, MetaReducer, on} from '@ngrx/store';
import {
  decrementChangesCounterAction,
  incrementChangesCounterAction,
  loadDogByIDAction,
  loadDogByIDResultAction,
  resetChangesCounterAction
} from './app.actions';
import {Dog} from '../dog';
import * as cats from '../cats/store/cats.reducers';

export interface AppState{
  changesCounter: number;
  editedDog: Dog;
  cats: cats.CatsState;
}
export const appInitialState = {
  changesCounter: 0,
  editedDog: null,
  cats: cats.initialState
} as AppState;


export const appInitialReducerMap: ActionReducerMap<any> = {
  changesCounter: _changesCounterReducer,
  editedDog: _editedDogReducer,
  cats: defaultReducer
};
// tslint:disable-next-line:typedef
export function defaultReducer<T>(state: T) {
  return state;
}
const changesCounterReducer = createReducer(
  0,
  on(incrementChangesCounterAction, (state) => {
    return state + 1;
  } ),
  on(decrementChangesCounterAction, (state) => {
    return state - 1;
  }),
  on(resetChangesCounterAction, (state) => {
    return 0;
  })
);


// tslint:disable-next-line:typedef
export function _changesCounterReducer(state, action) {
  return changesCounterReducer(state, action);
}
const editedDogReducer = createReducer(
  {} as Dog,
  on(loadDogByIDResultAction, (state, action) => {
    return action.payload as Dog;
  } )
);


// tslint:disable-next-line:typedef
export function _editedDogReducer(state, action) {
  return editedDogReducer(state, action);
}
