/* eslint-disable import/prefer-default-export */
import {
  CAN_ADD,
  ADD_ORG,
  DELETE_ORG,
} from '../constants/actions';

const initialState = {
  orgz: [],
  canShowList: false,
  canAdd: true,
};

export function orgzReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ORG:
      return {
        ...state,
        orgz: [...state.orgz, action.payload.orgz].flat(),
        canShowList: action.payload.canShowList,
        canAdd: action.payload.canAdd,
      };

    case CAN_ADD:
      return {
        ...state,
        canAdd: action.payload.canAdd,
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
