import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

class TabViewScreen extends React.Component {
  render() {
    return (
      <View style={{ alignItems: 'center', flexGrow: 1, justifyContent: 'center', backgroundColor: '#ED553B' }}>
        <Text>Tab View Screen</Text>
      </View>
    );
  }
}

export default TabViewScreen;
