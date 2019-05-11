import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text } from 'react-native';

import store from './redux/store';

import AppContainer from './Components/AppContainer';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
