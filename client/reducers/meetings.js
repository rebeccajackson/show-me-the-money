// WE NEED TO IMPORT THE VARIABLES FROM ACTIONS AND CHANGE HERE
// import {
//   RECEIVE_MEETINS,
//   REQUEST_MEETINGS,
//   SHOW_ERROR,
//   SAVE_MEETING
// } from "../actions";

const intialState = {
  meetings: [],
  loading: false
};

function meetings(state = intialState, action) {
  switch (action.type) {
    case "RECIEVE_MEETINGS":
      return {
        meetings: action.meetings,
        loading: action.loading
      };
    case "REQUEST_MEETINGS":
      return {
        ...state,
        loading: action.loading
      };
    case "SHOW_ERROR":
      return {
        ...state,
        loading: action.loading,
        errorMessage: action.errorMessage
      };
    case "SAVE_MEETING":
      return {
        ...state,
        loading: action.loading
      };
    default:
      return state;
  }
}

export default meetings;
