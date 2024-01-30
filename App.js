import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import NavigationFlows from "./src/navigation/NavigationFlows";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style="auto" translucent barStyle="light-content" />
        <NavigationFlows />
      </GestureHandlerRootView>
    </Provider>
  );
}
