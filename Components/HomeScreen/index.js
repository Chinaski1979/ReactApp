import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { changeAppTitle } from '../../redux/appReducer';

import Header from '../Header';
import GridItem from '../GridItem';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  gridContainer: {
    backgroundColor: '#173F5F',
    flex: 1,
    alignSelf: 'stretch',
    padding: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: '#34495e',
  },
});

const mapState = ({appState: { title, categories }}) => ({ title, categories });
const mapDispatch = { changeAppTitle };
export default connect(mapState, mapDispatch)(HomeScreen);
