import React from 'react';
import { connect } from 'react-redux';
import { addOrg, handleSaveBtn } from './actions/orgz';

function Organization({ orgData, saveOrg, isBtnClicked, clickBtn }) {
  const manager = (orgData.data.management !== null) ? orgData.data.management.name : 'Нет';
  const address = orgData.data.address.value;

  const handleClick = () => {
    clickBtn(true);
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
          <span>{address}</span>
          <span className="title">Генеральный директор</span>
          <span>{manager}</span>
        </div>
        <div className="numbers">
          <span>
            <span>ИНН</span>
            {orgData.data.inn}
          </span>
          <span>
            <span>КПП</span>
            {orgData.data.kpp}
          </span>
          <span>
            <span>ОГРН</span>
            {orgData.data.ogrn}
          </span>
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
    clickBtn: (click) => dispatch(handleSaveBtn(click)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Organization);
