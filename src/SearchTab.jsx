import React, { Component } from 'react';
import DadataSuggestions from 'react-dadata-suggestions';
import 'react-dadata-suggestions/dist/styles.css';

const token = '68f82416ea144e2a2367805e78ca514040ca42c7';

class SearchTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };
  }

  render() {
    return (
      <div className="searchTab">
        <p>Организация или ИП</p>
        <DadataSuggestions
          token={token}
          onSelect={(suggestion) => console.log(suggestion)}
          placeholder="Введите название, ИНН или адрес организации"
          service="party"
          
          selectedSuggestionFormatter={(suggestion) => `${suggestion.data.name.full}`}
          onError={(error) => alert(error.message)}
        />
        <div className="addWrapper">
          <div className="addIcon" />
          <span>Для добавления новой организации введите ее название, ИНН или адрес.</span>
        </div>
      </div>
    );
  }
}

export default SearchTab;
