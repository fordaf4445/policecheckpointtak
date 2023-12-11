import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ScreenArray } from '../Accessories/constants';

const DrawerNav = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      {ScreenArray.map((item, index) => {
        return (
          <Drawer.Screen key={index} name={item.route} component={item.component} />
        )
      })}
    </Drawer.Navigator>
  )
}

export default DrawerNav

const styles = StyleSheet.create({})