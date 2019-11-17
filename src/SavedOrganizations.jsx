/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { deleteOrg } from './actions/orgz';
import Org from './Org';

function SavedOrganizations({ orgzArr, canShowList }) {

  return (
    <ul>
      {canShowList && (orgzArr.map(({ value, data }) => <Org key={value} name={value} data={data} />))}
    </ul>
  );
}

const mapStateToProps = (state) => (
  {
    orgzArr: state.savedOrgz.orgz,
    canShowList: state.savedOrgz.canShowList,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    delete: () => dispatch(deleteOrg()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SavedOrganizations);
