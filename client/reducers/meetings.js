import {
  RECEIVE_MEETINGS,
  REQUEST_MEETINGS,
  SHOW_ERROR,
  SAVE_MEETING,
  CREATE_MEETING
} from "../actions/getMeetings.js";

const intialState = {
  meetings: [],
  loading: false
};

function meetings(state = intialState, action) {
  switch (action.type) {
    case RECEIVE_MEETINGS:
      return {
        meetings: action.meetings,
        loading: action.loading
      };
    case REQUEST_MEETINGS:
      return {
        ...state,
        loading: action.loading
      };
    case SHOW_ERROR:
      return {
        ...state,
        loading: action.loading,
        errorMessage: action.errorMessage
      };
    case SAVE_MEETING:
      return {
        ...state,
        loading: action.loading
      };
    case CREATE_MEETING:
      return {
        ...state, newMeeting: action.newMeeting
      }
    default:
      return state;
  }
}

export default meetings;
