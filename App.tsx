import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer} from '@/navigation';
import {StoreProvider, TranslationProvider} from '@/tools';

function App(): React.JSX.Element {
  return (
    <StoreProvider>
      <TranslationProvider>
        <SafeAreaProvider>
          <NavigationContainer />
        </SafeAreaProvider>
      </TranslationProvider>
    </StoreProvider>
  );
}

export default App;
