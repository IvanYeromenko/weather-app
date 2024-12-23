import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@/navigation";
import { TranslationProvider } from "@/tools";

function App(): React.JSX.Element {
  return (
    <TranslationProvider>
      <SafeAreaProvider>
        <NavigationContainer />
      </SafeAreaProvider>
    </TranslationProvider>
  );
}

export default App;
