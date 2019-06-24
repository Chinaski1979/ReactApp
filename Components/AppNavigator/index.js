import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import HomeScreen from '../HomeScreen';
import SectionScreen from '../SectionScreen';
import TabViewScreen from '../TabViewScreen';
import LoginScreen from '../LoginScreen';

export const AppNavigator = createStackNavigator({
  Main: { screen: HomeScreen, navigationOptions: () => ({
    headerStyle: {
      backgroundColor: '#3CAEA3',
    }, headerMode: 'screen' })
  },
  SectionScreen: { screen: SectionScreen, navigationOptions: ({navigation}) => ({ title: navigation.state.params.sectionTitle }) },
});

const MainNavigator = createBottomTabNavigator({
  Main: AppNavigator,
  TabViewScreen: { screen: TabViewScreen },
});

export const LoginNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: "Login"
    }
  }
});

export const switchNavigator = (isLoggedIn) => {
  return createSwitchNavigator(
    {
      LoginNavigator: LoginNavigator,
      MainNavigator: MainNavigator,
    },
    {
      // initialRouteName: isLoggedIn ? 'MainNavigator' : 'LoginNavigator', // This line is for having login screen when there's no token
      initialRouteName: 'MainNavigator',
    }
  )
};

const makeRootNavigator = (isLoggedIn) => createAppContainer(switchNavigator(isLoggedIn));

export default makeRootNavigator;
