import {
  BTN_CLICKED,
  ADD_ORG,
  DELETE_ORG,
} from '../constants/actions';

export const deleteOrg = (index) => (dispatch, getState) => {
  const { orgz } = getState().savedOrgz;
  const newState = orgz.filter((org, i) => i !== index);
  dispatch({
    type: DELETE_ORG,
    payload: {
      orgz: newState,
    },
  });
};

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
