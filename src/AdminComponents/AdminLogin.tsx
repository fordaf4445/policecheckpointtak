import { StyleSheet, Text, View, Button, TextInput, ActivityIndicator } from 'react-native';
import React, { useState, } from 'react';
import { useAuth } from '../ProviderComponents/AuthContext';


const AdminLogin: React.FC = () => {
  const { login, isLoading ,logout } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login(email, password);
  };

  const handleLogOut = () => {
    logout();
  };

  return (
    <View>
      <TextInput
        placeholder='Email'
        value={email}
        onChangeText={(value) => { setEmail(value) }}
        style={{ borderWidth: 1, }} />
      <TextInput
        placeholder='Password'
        value={password}
        onChangeText={(value) => { setPassword(value) }}
        style={{ borderWidth: 1, }} />
      {isLoading ? (<ActivityIndicator size={'large'} />) : (
        <Button
          title='Login'
          onPress={handleLogin} />
      )}
    </View>
  );
};

export default AdminLogin

const styles = StyleSheet.create({

})