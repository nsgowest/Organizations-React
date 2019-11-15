/* eslint-disable react/prop-types */
import React from 'react';

function Org({ name, data }) {
  const { inn, kpp, ogrn, management } = data;
  return (
    <li>{name}</li>
  );
}

export default Org;
