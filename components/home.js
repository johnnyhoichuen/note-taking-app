import React, { Component } from "react";
import { Appbar, Card, FAB, Colors, Button, Title } from "react-native-paper";
import { StyleSheet, Text, View, FlatList } from "react-native";

import { connect } from "react-redux";
// import { userDataListener } from "../redux/actions";

import firebase from "firebase";
// import { firebaseConfig } from "./config";

import colors from "../constant/colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { setUserData } from "../redux/actions";

function Item({ id, title, content, props }) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        // alert("clicked " + title + " " + content)
        props.navigation.navigate("EditNote", {
          id: id,
          title: title,
          content: content
        });
      }}
    >
      <Card style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </Card>
    </TouchableWithoutFeedback>
  );
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { userID: "002", firstName: "Hello", lastName: "World" };
  }

  // componentDidMount() {
  //   firebase
  //     .database()
  //     .ref("users")
  //     .on("value", function(snapshot) {
  //       // var userData = snapshot.val(); // this line causing error
  //       // this.props.setUserData(userData); // this line causing error
  //     });

  //   // function(error) {
  //   //   console.log(error);
  //   // }
  // }

  getUserData = props => {
    firebase
      .database()
      .ref("users/002")
      .on("value", function(snapshot) {
        var userData = snapshot.val(); // this line causing error
        props.setUserData(userData); // this line causing error
      });
  };

  // readUserData = () => {
  //   firebase
  //     .database()
  //     .ref("users/")
  //     .on("value", function(snapshot) {
  //       // console.log(snapshot.val())
  //       alert(snapshot.val());
  //     });
  // };

  setFirebaseData = (userID, firstName, lastName) => {
    firebase
      .database()
      .ref("users/" + userID)
      .set({
        firstName: firstName,
        lastName: lastName
      });
    alert("setting firebase");
  };

  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content
            title="All Notes"
            subtitle={
              this.props.userData.firstName + " " + this.props.userData.lastName
            }
          />
        </Appbar.Header>

        <Title>
          {this.props.userData.firstName + " " + this.props.userData.lastName}
        </Title>
        <Button
          onPress={() => {
            this.getUserData(this.props);
          }}
        >
          Get user data
        </Button>
        <Button
          onPress={() => {
            this.setFirebaseData(
              this.state.userID,
              this.state.firstName,
              this.state.lastName
            );
          }}
        >
          Set user data
        </Button>

        <FlatList
          style={{ backgroundColor: "white", width: "100%" }}
          data={this.props.notes}
          renderItem={({ item, index }) => (
            <Item
              id={index}
              title={item.title}
              content={item.content}
              props={this.props}
            />
          )}
          keyExtractor={item => item.id}
        ></FlatList>

        <FAB
          style={styles.fab}
          label="New Note"
          icon="plus"
          onPress={() => this.props.navigation.navigate("Note")}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    userData: state.userData,
    currentID: state.currentID
  };
};

const mapDispatchToProps = dispatch => ({
  setUserData: userData => {
    dispatch(setUserData(userData));
  }
});

export default connect(
  mapStateToProps,
  // null
  mapDispatchToProps
)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    width: "92%",
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 12,
    paddingTop: 10
  },
  title: {
    fontSize: 24
  },
  content: {
    fontSize: 16
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0
    // alignSelf: "flex-end"
  }
});
