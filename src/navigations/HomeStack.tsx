import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { HomeScreen, MovieInfo } from '@/screens';





const Stack = createStackNavigator();


  const HomeStack = () => {
    return (
       
      <Stack.Navigator screenOptions={{headerShown: false}}>
         <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="MovieInfoScreen" component={MovieInfo} />
      </Stack.Navigator>
      
    );
  };

export default HomeStack;
