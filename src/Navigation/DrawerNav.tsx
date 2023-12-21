import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ScreenArray,  } from '../Constants/constants';
import CustomDrawer from './CustomDrawer';
import { useAuth } from '../ProviderComponents/AuthContext';

const DrawerNav = () => {
  const { user } = useAuth();
  const Drawer = createDrawerNavigator();
  const [screenFilter, setScreenFilter] = useState(ScreenArray);

  const Filter = (state: string) => {
    const filtered = state === 'log' ? ScreenArray : ScreenArray.filter(item => item.status === 'non');
    setScreenFilter(filtered);
  }

  useEffect(() => {
    user ? (Filter('log')) : (Filter('non'))
  }, [user])

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}>
      {screenFilter.map((item, index) => {
        return (
          <Drawer.Screen key={index} name={item.route} component={item.component} />
        )
      })}

    </Drawer.Navigator>
  )
}

export default DrawerNav

const styles = StyleSheet.create({})