export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const SET_USER_DATA = "SET_USER_DATA";

export function addNote(title, content) {
  return { type: ADD_NOTE, title: title, content: content };
}

export function editNote(title, content) {
  return { type: EDIT_NOTE, title: title, content: content };
}

export function deleteNote(id) {
  return { type: DELETE_NOTE, id: id };
}

export function setUserData(userData) {
  return {
    type: SET_USER_DATA,
    firstName: userData.firstName,
    lastName: userData.lastName
    // id: id
  };
}

// firebase
// export function userDataListener() {
//   return function(dispatch) {
//     firebase
//       .database()
//       .ref("person")
//       .on(
//         "value",
//         function(snapshot) {
//           var userData = snapshot.val();
//           dispatch(setUserData(userData));
//         },
//         function(error) {}
//       );
//   };
// }
