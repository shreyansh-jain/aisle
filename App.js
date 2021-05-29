import React from 'react'
import { Dimensions, AsyncStorage } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'

import DrawerContent from '@Component/Menu/Left'

import Home from '@Screen/Home'
import Login from '@Screen/Login'
import Splash from '@Screen/Splash'

import { Provider } from "react-redux";
import { store } from '@Redux/store';


import NavigationService from '@Service/Navigation'

const deviceWidth = Dimensions.get('window').width

const Drawer = createDrawerNavigator(
  {
    Home: {
      screen: Home
    },
    Login: {
      screen: Login,
      navigationOptions: ({ navigation }) => (
        {
          gestureEnabled: false,
          drawerLockMode: 'locked-closed',
        }
      )
    },
    Splash: {
      screen: Splash,
      navigationOptions: ({ navigation }) => (
        {
          gestureEnabled: false,
          drawerLockMode: 'locked-closed',
        }
      )
    },
  },
  {
    contentComponent: DrawerContent,
    contentOptions: {
      activeTintColor: '#e91e63'
    },
    headerMode: 'none',
    initialRouteName: 'Login',
    drawerWidth: deviceWidth - 90
  }
)

const AppNav = createStackNavigator(
  {
    Drawer: {
      screen: Drawer
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'Drawer'
  }
)

const AppContainer = createAppContainer(AppNav)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} ><AppContainer ref={(r) => { NavigationService.setTopLevelNavigator(r) }} /></Provider>
    )
  }
}
