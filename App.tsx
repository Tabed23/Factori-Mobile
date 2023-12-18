import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persistor} from './src/store';
import MainStack from '@/navigations/MainStack';
import { SafeAreaView, StatusBar } from 'react-native';



const App = () => {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <SafeAreaView style={{flex:1,backgroundColor:'black'}}>
      
      <StatusBar barStyle={'light-content'}/>
     
   <MainStack/>
   </SafeAreaView>
    </PersistGate>
  </Provider>
  )
}

export default App