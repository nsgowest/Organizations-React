import React from 'react';
import SearchTab from './SearchTab';
import SavedOrganizations from './SavedOrganizations';

function App() {
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
          <label htmlFor="tab2">Сохраненные организации</label>

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

export default App;
