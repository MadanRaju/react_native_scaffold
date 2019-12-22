import React, { Component } from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import RootNavigator from './RootNavigator';

class App extends Component {
  constructor(props) {
    super(props);

    // System is SF font. Need to figure to include SF Pro Text
    Text.defaultProps.style = {
      fontFamily: 'System',
      color: '#4A4A4A',
      textAlign: 'center',
    };

    this.loadInitailState = this.loadInitailState.bind(this);
  }

  // Make a API call for auth then district info then home district and outage info for same day in the district
  loadInitailState() {
    return {};
  }

  render() {
    const initialState = this.loadInitailState();

    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

    return (
      <Provider store={store}>
        <RootNavigator style={{ display: 'flex' }} />
      </Provider>
    );
  }
}

export default App;
