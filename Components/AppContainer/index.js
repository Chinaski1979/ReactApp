import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import { changeAppTitle } from '../../redux/reducer';

import Header from '../Header';
import GridItem from '../GridItem';

class AppContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title={this.props.title} handleTitleChange={this.props.changeAppTitle}/>
        <View style={styles.gridContainer}>
          {
            this.props.categories.map(category => (
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

const mapState = ({ title, categories }) => ({ title, categories });
const mapDispatch = { changeAppTitle };
export default connect(mapState, mapDispatch)(AppContainer);
