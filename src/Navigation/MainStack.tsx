import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import DetailScreen from '../Screens/DetailScreen/DetailScreen';
import CreateScreen from '../Screens/CreateScreen/CreateScreen';

const Main = createNativeStackNavigator();

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Main.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Main.Screen name={'Home'} component={HomeScreen} />
        <Main.Screen name={'Detail'} component={DetailScreen} />
        <Main.Screen name={'Create'} component={CreateScreen} />
      </Main.Navigator>
    </NavigationContainer>
  );
};
