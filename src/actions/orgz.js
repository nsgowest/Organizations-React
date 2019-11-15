/* eslint-disable import/prefer-default-export */
import {
  GET_ORGZ_REQUEST,
  GET_ORGZ_SUCCESS,
  DELETE_ORG,
} from '../constants/actions';

export const deleteOrg = () => (
  {
    type: DELETE_ORG,
  }
);

