/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { addOrg, handleSaveBtn } from './actions/orgz';

function Organization({ orgData, saveOrg, isBtnClicked, clickBtn }) {
  const handleClick = () => {
    clickBtn();
    saveOrg(orgData);
  };

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
      {isBtnClicked
        ? (
          <div className="clickedButton">
            <div className="clickedImg" />
            Сохранено
          </div>
        )
        : (
          <button
            type="button"
            className="saveButton"
            onClick={handleClick}
          >
          Сохранить
          </button>
        )}
    </div>
  );
}

const mapStateToProps = (state) => (
  {
    isBtnClicked: state.savedOrgz.isBtnClicked,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    saveOrg: (suggestion) => dispatch(addOrg(suggestion)),
    clickBtn: () => dispatch(handleSaveBtn()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Organization);
