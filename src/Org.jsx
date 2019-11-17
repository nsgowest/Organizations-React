import React from 'react';
import { connect } from 'react-redux';
import { deleteOrg } from './actions/orgz';

function Org({ name, data, index, eraseOrg }) {
  const {
    inn, kpp, ogrn,
  } = data;
  const address = data.address.value;
  const manager = (data.management !== null) ? data.management.name : 'Нет';
  const extendButton = React.createRef();
  const closeButton = React.createRef();
  const extendableList = React.createRef();

  const extendList = () => {
    extendableList.current.classList.add('clicked');
    extendButton.current.style.display = 'none';
  };

  const closeList = () => {
    extendableList.current.classList.remove('clicked');
    extendButton.current.style.display = 'inline';
  };

  const handleDeleteClick = () => {
    eraseOrg(index);
  };

  return (
    <li className="listItem">
      <div className="title">
        <span>{name}</span>
        <button
          type="button"
          className="deleteButton"
          onClick={handleDeleteClick}
        />
      </div>
      <div className="info">
        <div className="innWrapper">
          <span>
            <span>ИНН</span>
            {inn}
          </span>
          <button
            type="button"
            className="extendButton"
            ref={extendButton}
            onClick={extendList}
          >
            подробнее
          </button>
        </div>
        <div ref={extendableList} className="extendableList">
          <span>
            <span>КПП</span>
            {kpp}
          </span>
          <span>
            <span>ОГРН</span>
            {ogrn}
          </span>
          <span>
            <span>Юридический адрес</span>
            {address}
          </span>
          <span>
            <span>Генеральный директор</span>
            {manager}
          </span>
          <button
            type="button"
            className="closeButton"
            ref={closeButton}
            onClick={closeList}
          >
            скрыть подробности
          </button>
        </div>
      </div>
    </li>
  );
}

const mapDispatchToProps = (dispatch) => (
  {
    eraseOrg: (index) => dispatch(deleteOrg(index)),
  }
);

export default connect(null, mapDispatchToProps)(Org);
