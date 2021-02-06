import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpLoginScreen from './screens/SignUpLoginScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {AppTabNavigator} from './components/AppTabNavigator';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {AppDrawerNavigator} from './components/AppDrawerNavigator';

export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator=createSwitchNavigator({
  SignUpLoginScreen:{
    screen:SignUpLoginScreen
  },
  Drawer:{
    screen:AppDrawerNavigator
  }
})

const AppContainer=createAppContainer(switchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import SignUpLoginScreen from './screens/SignUpLoginScreen';
import HomeScreen from './screens/HomeScreen';
import { createAppContainer ,createSwitchNavigator} from 'react-navigation';
import ExchangeScreen from './screens/ExchangeScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {AppDrawerNavigator} from './components/AppDrawerNavigator';

export default function App() {
  return (
    <AppContainer/>
  );
}

const TabNavigator = createBottomTabNavigator({
  HomeScreen:{
    screen:HomeScreen
  },
  Drawer:{
    screen:AppDrawerNavigator
  }},

  {
    defaultNavigationOptions:({navigation})=>({
      tabBarIcon: ()=>{
      const routeName = navigation.state.routeName
      if(routeName==='HomeScreen'){
        return(
          <Image source={require("./assets/home.png")}
                      style={{width:20,height:20}}/>
        )
      }else if(routeName==='ExchangeScreen'){
        return(
        <Image source={require("./assets/exchange.png")}
                      style={{width:20,height:20}}/>
        
        )
      }
    }
  })
  }
)


const switchNavigator = createSwitchNavigator({
  SignUpLoginScreen:{
    screen:SignUpLoginScreen
  },
  BottomTab:{
    screen:TabNavigator
  },
})

const AppContainer = createAppContainer(switchNavigator);*/