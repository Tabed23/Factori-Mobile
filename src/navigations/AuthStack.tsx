import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { CardDetailScreen, CategoryScreen, DocSignScreen, LoginScreen, SignupScreen, StartScreen } from '@/screens';




const Stack = createStackNavigator();


  const AuthStack = () => {
    return (
       
      <Stack.Navigator screenOptions={{headerShown: false}}>
         {/* <Stack.Screen name="StartScreen" component={StartScreen} /> */}
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="CardDetailScreen" component={CardDetailScreen} />
        <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
        <Stack.Screen name="DocSignScreen" component={DocSignScreen} />
      </Stack.Navigator>
      
    );
  };

export default AuthStack;
