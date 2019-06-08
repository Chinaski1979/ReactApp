import React from 'react';
import { Provider } from 'react-redux';
import { getStore, getPersistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { StyleSheet, Text } from 'react-native';
import Navigation from './Components/AppNavigator';

const store = getStore();
const persistor = getPersistor();

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
