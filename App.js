import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text } from 'react-native';

import store from './redux/store';

import Navigation from './Components/AppNavigator';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;
