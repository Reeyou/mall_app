import 'react-native-gesture-handler';
import * as React from 'react';

import Navigation from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {StatusBar} from 'react-native'

export default function App() {
  return (
    <SafeAreaProvider>
        {/* <Navigation colorScheme={colorScheme} /> */}
        <Navigation />
        {/* <StatusBar setHidden={false} /> */}
      </SafeAreaProvider>
  );
}