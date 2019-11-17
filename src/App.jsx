import React from 'react';
import { connect } from 'react-redux';
import SearchTab from './SearchTab';
import SavedOrganizations from './SavedOrganizations';

function App({ orgzLength }) {
  return (
    <div className="appWrapper">
      <header>
        <div className="headerLogo" />
      </header>

      <main>
        <p>Мои организации</p>

        <div className="tabs">
          <input id="tab1" type="radio" name="tabs" defaultChecked />
          <label htmlFor="tab1">Новая организация</label>

          <input id="tab2" type="radio" name="tabs" />
          <label htmlFor="tab2">Сохраненные организации ({orgzLength})</label>

          <div id="content-tab1">
            <SearchTab />
          </div>

          <div id="content-tab2">
            <SavedOrganizations />
          </div>
        </div>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { length } = state.savedOrgz.orgz;
  return {
    orgzLength: length,
  };
};

export default connect(mapStateToProps, null)(App);
