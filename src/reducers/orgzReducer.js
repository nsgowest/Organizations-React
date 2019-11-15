/* eslint-disable import/prefer-default-export */
import {
  GET_ORGZ_REQUEST,
  GET_ORGZ_SUCCESS,
  DELETE_ORG,
} from '../constants/actions';

const initialState = {
  orgz: [],
};

export function orgzReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ORGZ_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: '',
      };

    case GET_ORGZ_SUCCESS:
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
