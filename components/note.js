import React, { Component } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { connect } from "react-redux";
import { addNote } from "../redux/actions";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", content: "" };
  }

  onSubmit = () => {
    let { title, content } = this.state;
    this.props.addNote(title, content);
    this.setState({ title: "", content: "" });
    this.props.navigation.goBack();
  };

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View>
          <View style={styles.textContainer}>
            <TextInput
              style={styles.title}
              placeholder="Title"
              value={this.state.title}
              onChangeText={title => this.setState({ title: title })}
            />
            <TextInput
              multiline
              style={styles.content}
              placeholder="Put your notes here."
              numberOfLines={4}
              value={this.state.content}
              onChangeText={content => this.setState({ content: content })}
            />
          </View>

          <View style={styles.buttons}>
            <View style={{ flex: 1 }}></View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-around",
                // backgroundColor: "red",
                padding: 10
                // alignContent: "space-between",
              }}
            >
              <Button
                title="CANCEL"
                style={styles.button}
                onPress={() => this.props.navigation.goBack()}
              />
              <Button
                title="SAVE"
                style={styles.button}
                onPress={this.onSubmit}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default connect(
  null,
  {
    addNote: addNote
  }
)(Note);

const styles = StyleSheet.create({
  textContainer: {
    width: "80%",
    justifyContent: "center"
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 20,
    // backgroundColor: "blue",
    borderColor: "black"
  },

  content: {
    fontSize: 16,
    padding: 20,
    // backgroundColor: "red",
    textAlignVertical: "top"
    // alignContent: "flex-start",
    // justifyContent: "flex-start"
  },

  buttons: {
    // flex: 1,
    flexDirection: "row",
    alignContent: "flex-start",
    // justifyContent: "flex-end",
    // marginBottom: 50,
    padding: 10
  },

  button: {
    flex: 1,
    height: 25,
    padding: 30,
    backgroundColor: "blue",
    alignContent: "space-around"
    // justifyContent: "flex-end"
  }
});
