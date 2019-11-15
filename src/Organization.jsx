/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { addOrg } from './actions/orgz';

function Organization({ orgData, saveOrg }) {
  return (
    <div className="orgWrapper">
      <div className="orgName">
        {orgData.value}
      </div>
      <div className="infoWrapper">
        <div className="texts">
          <span className="title">Юридический адрес</span>
          <span>{orgData.data.address.value}</span>
          <span className="title">Генеральный директор</span>
          <span>{orgData.data.management.name}</span>
        </div>
        <div className="numbers">
          <span>ИНН {orgData.data.inn}</span>
          <span>КПП {orgData.data.kpp}</span>
          <span>ОГРН {orgData.data.ogrn}</span>
        </div>
      </div>
      <button type="button" className="saveButton" onClick={() => saveOrg(orgData)}>Сохранить</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => (
  {
    saveOrg: (suggestion) => dispatch(addOrg(suggestion)),
  }
);

export default connect(null, mapDispatchToProps)(Organization);
