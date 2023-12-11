import React from 'react';
import { AuthProvider } from './src/ProviderComponents/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNav from './src/Navigation/DrawerNav';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <DrawerNav />
      </NavigationContainer>
    </AuthProvider>
  )
}

export default App
