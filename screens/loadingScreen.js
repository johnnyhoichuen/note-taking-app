import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import firebase from "firebase";

class LoadingScreen extends Component {
  componentDidMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(
      function(user) {
        console.log("AUTH STATE CHANGED CALLED ");
        if (user) {
          this.props.navigation.navigate("Home");
        } else {
          this.props.navigation.navigate("LoginScreen");
        }
      }.bind(this)
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
// // import { Text } from "react-native-paper";

// import firebase from "firebase";

// const LoadingScreen = props => {
//   const [loadingText, setLoadingText] = useState("Loading");

//   useEffect(() => {
//     isLoginIn = () => {
//       firebase.auth().onAuthStateChanged(user => {
//         if (user) {
//           this.props.navigation.navigate("Home");
//         } else {
//           this.props.navigation.navigate("LoginScreen");
//         }
//       });
//     };
//     // isLoginIn();
//   }, []);

//   isLoginIn = () => {
//     firebase.auth().onAuthStateChanged(user => {
//       console.log("Auth state changed");
//       if (user) {
//         props.navigation.navigate("Home");
//       } else {
//         props.navigation.navigate("LoginScreen");
//       }
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <ActivityIndicator size="large" />
//       <Text>{loadingText}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignContent: "center",
//     justifyContent: "center"
//   }
// });

// export default LoadingScreen;
