/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';
import { orgzReducer } from './orgzReducer';

export const rootReducer = combineReducers({
  savedOrgz: orgzReducer,
});
