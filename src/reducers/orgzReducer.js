/* eslint-disable import/prefer-default-export */
import {
  ADD_ORG,
  DELETE_ORG,
} from '../constants/actions';

const initialState = {
  orgz: [],
};

export function orgzReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ORG:
      return {
        ...state,
        orgz: [...state.orgz, action.payload.orgz].flat(),
      };

    case DELETE_ORG:
      // const newOrgz = state.orgz.filter((org) => {

      // })
      return {
        ...state,
        orgz: [],
      };

    default:
      return state;
  }
}
