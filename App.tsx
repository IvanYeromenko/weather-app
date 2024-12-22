import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@/navigation";

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer />
    </SafeAreaProvider>
  );
}

export default App;
