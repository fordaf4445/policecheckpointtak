import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { NavigationContainer, RouteProp, useNavigation } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from '../ProviderComponents/AuthContext';

import EmergencyPhoneNumber from '../EmergencyPhoneNumber';
import ReportLostCard from '../ReportLostCard';
import HomePage from '../HomePageComponents/HomePage';
import ReportPage from '../HomePageComponents/ReportPage';
import AdminLogin from '../AdminComponents/AdminLogin';

export type RootStackParamList = {
  HomePage: undefined;
};

export type StackNavigation = NativeStackNavigationProp<RootStackParamList>;


const NavigateComponent: React.FC = () => {

  const Drawer = createDrawerNavigator();
  const { user, logout } = useAuth();

  function CustomDrawerContent(props: any) {
    const navigation = useNavigation<StackNavigation>();

    return (
      <DrawerContentScrollView style={{ flex: 1, borderWidth: 5 }}>
        <DrawerItemList {...props} />
        <DrawerItem label={'Logout'} onPress={() => { navigation.navigate('HomePage'), logout() }} />
      </DrawerContentScrollView>
    )
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='HomePage'
        drawerContent={props => <CustomDrawerContent {...props} />}
      >
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
            drawerStyle: { borderWidth: 1, flex: 1 },
          }}
        />
        {user ? (null) : (<Drawer.Screen
          name='AdminLogin'
          component={AdminLogin}
          options={{
            title: 'AdminLogin',
          }}

        />)}

      </Drawer.Navigator>
    </NavigationContainer>
  )
};

export default NavigateComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});