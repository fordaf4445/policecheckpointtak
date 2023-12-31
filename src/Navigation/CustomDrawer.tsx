import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Container } from '../Accessories/Container';
import { DrawerNavigationState, ParamListBase, useNavigation } from '@react-navigation/native';
import { DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { DrawerDescriptorMap, DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { useAuth } from '../ProviderComponents/AuthContext';
import AdminLogin from '../AdminComponents/AdminLogin';
import Icon, { Icons } from '../Accessories/Icons';

export type Props = {
  state: DrawerNavigationState<ParamListBase>;
  navigation: DrawerNavigationHelpers;
  descriptors: DrawerDescriptorMap;
}

const CustomDrawer = (props: Props) => {
  const navigate = useNavigation();
  const { user, state, setState } = useAuth();


  return (
    <Container>
      <AdminLogin />
      <View>
        <Text style={styles.fontStyle}>WelCome</Text>
      </View>
      <DrawerItemList {...props} />
      {user ? (
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <DrawerItem label='LogOut' onPress={() => { setState((p) => ({ ...p, adminLogOunt: !state.adminLogOunt })) }}
            icon={({ size, color }) => <Icon type={Icons.FontAwesome} name='sign-out' size={size} color={color} />} />
        </View>
      ) : (<View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <DrawerItem label='AdminLogin' onPress={() => { setState((p) => ({ ...p, adminLogin: !state.adminLogin })) }}
          icon={({ size, color }) => <Icon type={Icons.FontAwesome} name='sign-in' size={size} color={color} />} />
      </View>)}

    </Container>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  fontStyle: {
    fontSize: 25
  },
});
