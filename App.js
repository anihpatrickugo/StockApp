import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import NavigationFlows from "./src/navigation/NavigationFlows";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

export const client = new ApolloClient({
  uri: "http://192.168.43.254:8000/graphql/",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <StatusBar style="auto" translucent barStyle="light-content" />
          <NavigationFlows />
        </GestureHandlerRootView>
      </Provider>
    </ApolloProvider>
  );
}

if (__DEV__) {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}
