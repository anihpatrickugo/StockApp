import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import NavigationFlows from "./src/navigation/NavigationFlows";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="auto" translucent barStyle="light-content" />
      <NavigationFlows />
    </GestureHandlerRootView>
  );
}
