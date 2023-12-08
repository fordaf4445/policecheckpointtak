import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, RouteProp, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import EmergencyPhoneNumber from './src/EmergencyPhoneNumber';
import ReportLostCard from './src/ReportLostCard';
import HomePage from './src/HomePageComponents/HomePage';
import ReportPage from './src/HomePageComponents/ReportPage';
import AdminLogin from './src/AdminComponents/AdminLogin';

const App: React.FC = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='HomePage'>
        <Drawer.Screen
          name='HomePage'
          component={HomePage}
          options={{
            title: 'HomePage',
          }}
        />
        <Drawer.Screen
          name='ReportLostCard'
          component={ReportLostCard}
          options={{
            title: 'แจ้งบัตรหาย',
          }}
        />
        <Drawer.Screen
          name='EmergencyPhoneNumber'
          component={EmergencyPhoneNumber}
          options={{
            title: 'เบอร์โทรฉุกเฉิน',
          }}
        />
        <Drawer.Screen
          name='AdminLogin'
          component={AdminLogin}
          options={{
            title: 'AdminLogin',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
};

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});