import {createAction, FunctionWithParametersType, props} from '@ngrx/store';
import {Dog} from '../dog';
import {TypedAction} from '@ngrx/store/src/models';

export const incrementChangesCounterAction = createAction('[Counter Component] Increment', props<{diff: number}>());
export const decrementChangesCounterAction = createAction('[Counter Component] Decrement', props<{diff: number}>());
export const resetChangesCounterAction = createAction('[Counter Component] Reset');

export const loadDogByIDAction: FunctionWithParametersType<[{id: number}], TypedAction<any>> & TypedAction<any> = createAction('[App] Load Dog by id', props<{id: number}>());
export const loadDogByIDResultAction = createAction('[App] Load Dog by id result', props<{payload: Dog}>());
