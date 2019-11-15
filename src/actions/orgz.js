/* eslint-disable import/prefer-default-export */
import {
  ADD_ORG,
  DELETE_ORG,
} from '../constants/actions';

export const deleteOrg = () => (
  {
    type: DELETE_ORG,
  }
);

export const addOrg = (suggestion) => (
  {
    type: ADD_ORG,
    payload: {
      orgz: suggestion,
      canShowList: true,
    },
  }
);
