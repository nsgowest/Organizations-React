/* eslint-disable react/prop-types */
import React from 'react';

function Org({ name, data }) {
  const { inn, kpp, ogrn, management } = data;

  return (
    <li className="listItem">
      <div className="title">
        <span>{name}</span>
        <button type="button" className="deleteIcon" />
      </div>
      <div className="info">
        <span>
          <span>ИНН</span>
          {inn}
        </span>
        <button type="button" className="extendButton">подробнее</button>
      </div>
    </li>
  );
}

export default Org;
