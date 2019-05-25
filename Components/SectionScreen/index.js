import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

class SectionScreen extends React.Component {
  render() {
    return (
      <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center', backgroundColor: '#f6D55C' }}>
        <Text>{this.props.navigation.getParam('sectionTitle')}</Text>
      </View>
    );
  }
}

export default SectionScreen;
