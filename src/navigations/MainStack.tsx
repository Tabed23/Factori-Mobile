import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import { AppWrapper} from '@/components';
import BottomTabs from './BottomTab';
import { Calendly } from '@/screens';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
   
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Auth"
          screenOptions={{headerShown: false, animation: 'slide_from_right',}}>
          <Stack.Screen name="Auth" component={AuthStack} />
          <Stack.Screen name="Tabs" component={BottomTabs} />
         

        </Stack.Navigator>
        
      </NavigationContainer>
     
   
  );
};

export default MainStack;
