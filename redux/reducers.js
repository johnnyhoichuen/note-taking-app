import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE, SET_USER_DATA } from "./actions";

const initialState = {
  notes: [
    {
      title: "test title",
      content: "test content"
    },
    {
      title: "more test title",
      content: "more test content"
    }
  ],
  currentID: -1,
  userData: { firstName: "Johnny", lastName: "Cheng" }
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...states,
        notes: [
          ...state.notes,
          { title: action.title, content: action.content }
        ]
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note, index) => index != action.id)
      };
    // case EDIT_NOTE:
    //   return {
    //     ...state.notes
    //     // title = action.titile,
    //     // content = action.content
    //   };
    case SET_USER_DATA:
      return {
        ...state,
        userData: [
          ...state.userData,
          {
            firstName: action.userData.firstName,
            lastName: action.userData.lastName
          }
        ]
      };
    default:
      return state;
  }
}

export default rootReducer;
