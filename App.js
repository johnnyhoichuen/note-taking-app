import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";

// redux
import { store } from "./redux/store";

import Home from "./components/home";
import Note from "./components/note";
import EditNote from "./components/editNote";

import * as firebase from "firebase";
import { firebaseConfig } from "./config";

const RootStack = createStackNavigator(
  {
    Home: Home,
    Note: Note,
    EditNote: EditNote
  },
  {
    initialRouteName: "Home"
  }
);
const AppContainer = createAppContainer(RootStack);

export default function App() {
  // if (!firebase.apps.length) {
  //   firebase.initializeApp(firebaseConfig);
  //   // firebase
  //   //   .database()
  //   //   .ref("users/001")
  //   //   .set({
  //   //     highscore: 200
  //   //   });

  //   // alert("firebase init done");
  // }

  return (
    <Provider store={store}>
      <PaperProvider>
        <AppContainer />
      </PaperProvider>
    </Provider>
  );
}
