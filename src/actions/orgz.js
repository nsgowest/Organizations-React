/* eslint-disable import/prefer-default-export */
import {
  CAN_ADD,
  ADD_ORG,
  DELETE_ORG,
} from '../constants/actions';

export const deleteOrg = () => (
  {
    type: DELETE_ORG,
  }
);

export const cantAdd = () => (
  {
    type: ADD_ORG,
    payload: {
      canAdd: false,
    },
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
