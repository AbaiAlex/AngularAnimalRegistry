import {catsFeatureName, CatsState} from './cats.reducers';
import {createFeatureSelector, createSelector} from '@ngrx/store';

const featureSelector = createFeatureSelector<CatsState>(catsFeatureName);

const listData = createSelector(featureSelector, (state: CatsState) => state.listData);
const editedData = createSelector(featureSelector, (state: CatsState) => state.editedData);
export const catsSelector = {
  listData,
  editedData
};
