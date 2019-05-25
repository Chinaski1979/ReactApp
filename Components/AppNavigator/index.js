import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../HomeScreen';
import SectionScreen from '../SectionScreen';
import TabViewScreen from '../TabViewScreen';

export const AppNavigator = createStackNavigator({
  Main: { screen: HomeScreen, navigationOptions: () => ({
    headerStyle: {
      backgroundColor: '#3CAEA3',
    }, headerMode: 'screen' })
  },
  SectionScreen: { screen: SectionScreen, navigationOptions: ({navigation}) => ({ title: navigation.state.params.sectionTitle }) },
});

const TabNavigator = createBottomTabNavigator({
  Main: AppNavigator,
  TabViewScreen: {screen: TabViewScreen},
});

export default createAppContainer(TabNavigator);
