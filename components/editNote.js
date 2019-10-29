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
import { editNote, deleteNote } from "../redux/actions";

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.navigation.getParam("id", -1),
      title: this.props.navigation.getParam("title", " "),
      content: this.props.navigation.getParam("content", " ")
    };
  }

  onEdit = () => {
    let { title, content } = this.state;
    this.props.editNote(title, content);
    this.setState({ title: "", content: "" });
    this.props.navigation.goBack();
  };

  onDelete = () => {
    this.props.deleteNote(this.state.id);
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
                padding: 10
              }}
            >
              <Button
                title="DELETE"
                style={styles.button}
                onPress={this.onDelete}
              />
              <Button
                title="EDIT"
                style={styles.button}
                onPress={this.onEdit}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     notes: state.notes
//   };
// };
// const mapDispatchToProprs = {
//   deleteNote: deleteNote
// };

export default connect(
  null,
  {
    editNote: editNote,
    deleteNote: deleteNote
  }
)(EditNote);

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

// export default Note;
