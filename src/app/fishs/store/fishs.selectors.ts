import {createFeatureSelector, createSelector} from '@ngrx/store';
import {fishsFeatureName, FishsState} from './fishs.reducers';

const featureSelector = createFeatureSelector<FishsState>(fishsFeatureName);

const listData = createSelector(featureSelector, (state: FishsState) => state.listData);
const editedData = createSelector(featureSelector, (state: FishsState) => state.editedData);
export const fishsSelector = {
  listData,
  editedData
};
