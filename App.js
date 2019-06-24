import React from 'react';
import { Provider } from 'react-redux';
import { getStore, getPersistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { StyleSheet, Text } from 'react-native';
import FBSDK from 'react-native-fbsdk';
import makeRootNavigator from './Components/AppNavigator';

const store = getStore();
const persistor = getPersistor();


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      accessToken: null
    }
  }

  componentDidMount() {
    if (FBSDK) {
      console.log('FBSDK', FBSDK);
      const { AccessToken } = FBSDK;
      AccessToken.getCurrentAccessToken()
      .then((data) => {
        if (data) {
          this.setState({
            accessToken: data.accessToken
          });
        }
      })
      .catch(error => {
        console.log(error)
      })
    }
  }

  render() {
    const Navigator = makeRootNavigator(this.state.accessToken);
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Navigator />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
