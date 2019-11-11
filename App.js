import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";

// redux
import { store } from "./redux/store";

// components
import LoadingScreen from "./screens/loadingScreen";
import LoginScreen from "./screens/loginScreen";
import Home from "./components/home";
import Note from "./components/note";
import EditNote from "./components/editNote";

// firebase
import * as firebase from "firebase";
import { firebaseConfig } from "./config";

const withoutTopBar = ({ navigation }) => ({
  headerMode: "none",
  headerVisible: false,
  header: null
});

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: withoutTopBar
    },
    Note: Note,
    EditNote: EditNote,
    LoadingScreen: {
      screen: LoadingScreen,
      navigationOptions: withoutTopBar
    },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: withoutTopBar
    }
  },
  {
    // initialRouteName: "Home"
    initialRouteName: "LoadingScreen"
  }
);
const AppContainer = createAppContainer(RootStack);

export default function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    alert("firebase init");
  }
  return (
    <Provider store={store}>
      <PaperProvider>
        <AppContainer />
      </PaperProvider>
    </Provider>
  );
}
