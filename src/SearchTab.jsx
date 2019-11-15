import React from 'react';

function SearchTab() {
  return (
    <div className="searchTab">
      <p>Организация или ИП</p>
      <input type="text" placeholder="Введите название, ИНН или адрес организации" />

      <div className="addWrapper">
        <div className="addIcon" />
        <span>Для добавления новой организации введите ее название, ИНН или адрес.</span>
      </div>
    </div>
  );
}

export default SearchTab;
