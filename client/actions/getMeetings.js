import request from "superagent";
import { getApiToken } from "../utils/auth";
import NewMeeting from "../containers/NewMeeting";

export const SHOW_ERROR = "SHOW_ERROR";
export const REQUEST_MEETINGS = "REQUEST_MEETINGS";
export const RECEIVE_MEETINGS = "RECEIVE_MEETINGS";
export const CREATE_MEETING = "CREATE_MEETING";


export const createMeeting = (newMeeting) => {
  return {
    type: CREATE_MEETING,
    newMeeting: newMeeting
  }
}
export const SET_MEETING = "SET_MEETING";

export const setMeetingId = meetingId => {
  return {
    type: SET_MEETING,
    meetingId
  };
};

export const loading = () => {
  return {
    type: REQUEST_MEETINGS,
    loading: true
  };
};

export const receiveMeetings = meetings => {
  return {
    type: RECEIVE_MEETINGS,
    meetings: meetings,
    loading: false
  };
};

export const requestMeetings = meetings => {
  return {
    type: RECEIVE_MEETINGS,
    meetings: meetings,
    loading: false
  }
}

export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users: users,
    loading: false
  }
}

export const sendMeeting = meeting => {
  return {
    type: SAVE_MEETING,
    meeting: meeting,
    loading: false
  }
}

export const showError = errorMessage => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage,
    loading: false
  };
};

export function getAllMeetings() {
  return dispatch => {
    dispatch(loading());
    return request
      .get("api/meetings")
      .then(res => {
        dispatch(receiveMeetings(res.body));
      })
      .catch(err => {
        dispatch(showError(err.message));
      });
  };
}

export function getMeetings(meetingId) {
  return dispatch => {
    console.log("hey");
    dispatch(loading());
    return request
      .get(`api/meetings/${meetingId}`)
      .then(res => {
        console.log(res.body);
        if (!res.body.length == 1) {
          dispatch(showError("nothing g"));
        } else {
          dispatch(receiveMeetings(res.body));
        }
      })
      .catch(err => {
        dispatch(showError(err.message));
      });
  };
}

export function saveMeeting(meeting) {
  console.log(meeting);
  return dispatch => {
    dispatch(loading());
    return request
      .post(`/api/v1/meetings/save`, meeting)
      .then(res => {
        dispatch(receiveMeetings(res.body));
      })
      .catch(err => {
        dispatch(showError(err.message));
      });
  };
}
