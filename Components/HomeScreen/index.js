import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { changeAppTitle } from '../../reducers/appReducer';

import Header from '../Header';
import GridItem from '../GridItem';

import styles from './styles.js';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title={this.props.title} handleTitleChange={this.props.changeAppTitle}/>
        <View style={styles.gridContainer}>
          {
            this.props.categories.map(category => (
              <GridItem
                key={ category.title }
                title={ category.title }
                handlePress={() => this.props.navigation.navigate('SectionScreen', {sectionTitle: category.title})}
              />
            ))
          }
        </View>
      </View>
    );
  }
}

const mapState = ({appState: { title, categories }}) => ({ title, categories });
const mapDispatch = { changeAppTitle };
export default connect(mapState, mapDispatch)(HomeScreen);
