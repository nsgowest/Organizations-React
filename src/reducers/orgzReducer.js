/* eslint-disable import/prefer-default-export */
import {
  BTN_CLICKED,
  ADD_ORG,
  DELETE_ORG,
} from '../constants/actions';

const initialState = {
  orgz: [],
  canShowList: false,
  isBtnClicked: false,
};

export function orgzReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ORG:
      return {
        ...state,
        orgz: [...state.orgz, action.payload.orgz].flat(),
        canShowList: action.payload.canShowList,
        isBtnClicked: state.isBtnClicked,
      };

    case BTN_CLICKED:
      return {
        ...state,
        isBtnClicked: action.payload.isBtnClicked,
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
