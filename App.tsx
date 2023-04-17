import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { HomeStack } from './src/navigation';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const App = () => (
  <BottomSheetModalProvider>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </GestureHandlerRootView>
  </BottomSheetModalProvider>
);

export default App;
