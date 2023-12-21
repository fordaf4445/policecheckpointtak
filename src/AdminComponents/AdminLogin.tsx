import { StyleSheet, Text, View, Button, TextInput, } from 'react-native';
import React, { useState, } from 'react';
import { useAuth } from '../ProviderComponents/AuthContext';
import { AlertCon } from '../Accessories/Alert';
import Fonts from '../Accessories/Fonts';

const AdminLogin: React.FC = () => {
  const { login, logout, state, setState } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login(email, password);
  };

  return (
    <View>
      <AlertCon
        isVisible={state.adminLogOunt}
        textPrimary='แจ้งเตือน'
        textSecondary='คุณต้องการออกระบบใช่หรือไม่ ?'
        buttonsStyle='cancel'
        onPressOK={() => { logout(); }}
        onPressCancel={() => { setState((prevState) => ({ ...prevState, adminLogOunt: !state.adminLogOunt })) }} />
      <AlertCon
        isVisible={state.adminLogin}
        textPrimary='AdminLogin'
        styleView={(
          <View style={{ width: 250 }}>
            <TextInput
              placeholder='Email'
              value={email}
              onChangeText={(value) => { setEmail(value) }}
              style={styles.TextInputContainer} />
            <TextInput
              placeholder='Password'
              value={password}
              onChangeText={(value) => { setPassword(value) }}
              style={[styles.TextInputContainer, { marginTop: 5 }]} />
          </View>
        )}
        onPressOK={() => { handleLogin() }}
        onPressCancel={() => { setState((prevState) => ({ ...prevState, adminLogin: !state.adminLogin })) }}
        buttonsStyle='cancel' />
    </View>
  );
};

export default AdminLogin

const styles = StyleSheet.create({
  TextInputContainer: {
    borderWidth: 1,
    borderRadius: 2,
    height: 40,
    fontFamily: Fonts.AlerttextPrimary,
  },
})