import React, { Component } from 'react';
import { connect } from 'react-redux';
import DadataSuggestions from 'react-dadata-suggestions';
import { addOrg, handleSaveBtn } from './actions/orgz';
import Organization from './Organization';

import 'react-dadata-suggestions/dist/styles.css';

const token = '68f82416ea144e2a2367805e78ca514040ca42c7';

class SearchTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestion: null,
    };
  }

  handleSelect = (suggestion) => {
    this.props.isClicked()
    this.setState({
      suggestion,
    })
  }

  render() {
    return (
      <div className="searchTab">
        <p>Организация или ИП</p>
        <DadataSuggestions
          token={token}
          onSelect={(suggestion) => this.handleSelect(suggestion)}
          placeholder="Введите название, ИНН или адрес организации"
          hint=""
          highlighting={false}
          service="party"
          suggestionsFormatter={(suggestion) =>
            `${suggestion.value} г. ${suggestion.data.address.data.city}`}
          selectedSuggestionFormatter={(suggestion) =>
            `${suggestion.data.name.full_with_opf} ИНН ${suggestion.data.inn} адрес ${suggestion.data.address.value}`
        }
        />
        {(this.state.suggestion === null)
        ? <div className="addWrapper">
            <div className="addIcon" />
            <span>Для добавления новой организации введите ее название, ИНН или адрес.</span>
          </div>
        : <Organization orgData={this.state.suggestion} />}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveOrg: (suggestion) => dispatch(addOrg(suggestion)),
    isClicked: () => dispatch(handleSaveBtn()),
  }
}

export default connect(null, mapDispatchToProps)(SearchTab);
