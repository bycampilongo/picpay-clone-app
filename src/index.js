import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import Navigation from './Navigation'

export default function Main() {
  return (
    <>
    <StatusBar style="light" backgroundColor="#000"/> 
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
    </>
  )
}
