import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './Components/Header';
import GridItem from './Components/GridItem';

const categories = [
  {title: 'Section 1'},
  {title: 'Section 2'},
  {title: 'Section 3'},
  {title: 'Section 4'},
  {title: 'Section 5'},
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.gridContainer}>
          {
            categories.map(category => (
              <GridItem key={ category.title } title={ category.title } />
            ))
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  gridContainer: {
    backgroundColor: '#ecf0f1',
    flex: 1,
    alignSelf: 'stretch',
    padding: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
});
