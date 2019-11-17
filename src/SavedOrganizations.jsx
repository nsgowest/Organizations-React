/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import Org from './Org';

function SavedOrganizations({ orgzArr, canShowList }) {
  return (
    <ul>
      {canShowList && (orgzArr.map(({ value, data }, i) => <Org key={i} index={i} name={value} data={data} />))}
    </ul>
  );
}

const mapStateToProps = (state) => (
  {
    orgzArr: state.savedOrgz.orgz,
    canShowList: state.savedOrgz.canShowList,
  }
);

export default connect(mapStateToProps)(SavedOrganizations);
