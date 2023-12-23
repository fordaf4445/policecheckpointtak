import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {StackNavigation} from "../Navigation/StackNav";

const AdminOfficerPage  = () => {
  const navigation = useNavigation<StackNavigation>();
  return (
    <View>
      <Text>AdminOfficerPage</Text>
      <Button
        title='Go to CheckingPage'
        onPress={() => { navigation.navigate('CheckingPage') }} />
      
    </View>
  )
}

export default AdminOfficerPage

const styles = StyleSheet.create({})