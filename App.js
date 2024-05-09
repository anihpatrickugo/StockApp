import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  createHttpLink,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import NavigationFlows from "./src/navigation/NavigationFlows";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootSiblingParent } from "react-native-root-siblings";

// Create an HTTP link for the GraphQL endpoint
const httpLink = createHttpLink({
  uri: "http://192.168.43.254:8000/graphql/", // Replace with your GraphQL endpoint
});

// Middleware to set JWT token in the headers
const authLink = setContext(async (_, { headers }) => {
  // Get the JWT token from wherever you store it (localStorage, AsyncStorage, etc.)
  // const jwtToken = localStorage.getItem('jwtToken'); // Example: Using localStorage
  const jwtToken = await AsyncStorage.getItem("token"); // Example: Using localStorage

  // Return the headers object with the JWT token included
  return {
    headers: {
      ...headers,
      authorization: jwtToken ? `JWT ${jwtToken}` : "", // Include the token in the authorization header
    },
  };
});

export const client = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <StatusBar style="auto" translucent barStyle="light-content" />
          <RootSiblingParent>
            <NavigationFlows />
          </RootSiblingParent>
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
