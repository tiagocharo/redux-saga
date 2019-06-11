import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import RepoList from './RepoList';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>API GitHub</h1>
          <RepoList />
        </div>
      </Provider>
    );
  }
}

export default App;
