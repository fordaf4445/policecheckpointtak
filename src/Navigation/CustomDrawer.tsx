import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Container } from '../Accessories/Container';
import { DrawerNavigationState, ParamListBase, useNavigation } from '@react-navigation/native';
import { DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { DrawerDescriptorMap, DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { drawerMenu } from '../Constants/constants';
import { useAuth } from '../ProviderComponents/AuthContext';


export type Props = {
  state: DrawerNavigationState<ParamListBase>;
  navigation: DrawerNavigationHelpers;
  descriptors: DrawerDescriptorMap;
}
const CustomDrawer = (props: Props) => {
  const navigate = useNavigation();
  const { logout, user } = useAuth();
  return (
    <Container>
      <View>
        <Text style={styles.fontStyle}>WelCome</Text>
      </View>
      <DrawerItemList {...props} />
      {user ? (
        <View style={{ borderWidth: 1, flex: 1, justifyContent: 'flex-end' }}>
          <DrawerItem label='Logout' onPress={() => { logout() }} />
        </View>
      ) : null}

    </Container>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  fontStyle: {
    fontSize: 25
  },
});
