import React from 'react';
import { Provider } from 'react-redux';
import {getStore, getPersistor} from './app/store';
import { PersistGate } from 'redux-persist/integration/react';
import { StyleSheet, Text } from 'react-native';

const store = getStore();
const persistor = getPersistor();

import Navigation from './Components/AppNavigator';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Navigation />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
