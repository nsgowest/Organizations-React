/* eslint-disable import/prefer-default-export */
import {
  BTN_CLICKED,
  ADD_ORG,
  DELETE_ORG,
} from '../constants/actions';

export const deleteOrg = () => (
  {
    type: DELETE_ORG,
  }
);

export const handleSaveBtn = (click) => (
  {
    type: BTN_CLICKED,
    payload: {
      isBtnClicked: click,
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
