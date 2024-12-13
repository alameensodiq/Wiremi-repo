import { useAppContext } from '@/Context/useAppContext';
import React, { useEffect } from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import NoToken from './NoToken';
import TokenAvailable from './TokenAvailable';


const MainNavigator = () => {
    const {isAuthenticated, checkUser} = useAppContext()

  useEffect(() => {
    checkUser();
  }, [checkUser]);
  console.log(isAuthenticated);
  if (isAuthenticated === undefined) {
    // Render a loading spinner while checking authentication
    return (
      <View>
        <ActivityIndicator size="large" color="#6200ee" />
      </View>
    );
  }
  return isAuthenticated  ? <TokenAvailable /> : <NoToken />;
};


export default MainNavigator;
