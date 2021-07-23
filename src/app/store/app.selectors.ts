import {AppState} from './app.reducers';

export const selectChangesCounter = (state: AppState) => state.changesCounter;
export const selectEditedDog = (state: AppState) => state.editedDog;
