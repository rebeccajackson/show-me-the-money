import request from "superagent";
import { getApiToken } from "../utils/auth";
import newMeeting from "../containers/NewMeeting";

export const SHOW_ERROR = "SHOW_ERROR";
export const REQUEST_MEETING = "REQUEST_MEETINGS";
export const RECEIVE_MEETINGS = "RECEIVE_MEETINGS";
export const CREATE_MEETING = "CREATE_MEETING";
export const SET_MEETING = "SET_MEETING";


export const createMeeting = (newMeeting) => {
    return {
        type: CREATE_MEETING,
        newMeeting: newMeeting
    }
}

export const setMeetingId = meetingId => {
    return {
        type: SET_MEETING,
        meetingId
    };
};

export const receiveMeetings = meetings => {
    return {
        type: RECEIVE_MEETINGS,
        meetings: meetings,
        loading: false
    }
}

export const requestMeeting = meeting => {
    return {
        type: REQUEST_MEETING,
        meeting: meeting,
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

export const showError = (errorMessage) => {
    return {
        type: SHOW_ERROR,
        errorMessage: errorMessage,
        loading: false
    }
}

export function getAllMeetings() {
    return dispatch => {
        dispatch(loading())
        return request
            .get('api/meetings')
            .then(res => {
                dispatch(receiveMeetings(res.body))
            })
            .catch(err => {
                dispatch(showError(err.message))
            })
    }
}

export function getMeetingById(meetingId) {
    return dispatch => {
        // dispatch(loading())
        return request
            .get(`api/meetings/${meetingId}`)
            .then(res => {
                if (res.body == undefined) {
                    dispatch(showError('nothing g'))
                } else {

                    dispatch(requestMeeting(res.body))
                }
            })
            .catch(err => {
                dispatch(showError(err.message))
            })
    }
}

export function getUsersByMeeting(meetingId) {
    return dispatch => {
        dispatch(loading())
        return request
            .get(`api/meetings/${meetingId}/users`)
            .then(res => {
                dispatch(receiveUsers(res.body))
            })
            .catch(err => {
                dispatch(showError(err.message))
            })
    }
}


export function saveMeeting(meeting) {
    return dispatch => {
        dispatch(loading());
        return request
            .post(`/api/meetings`, meeting)
            .then(res => {
                dispatch(getAllMeetings())
            })
            .catch(err => {
                dispatch(showError(err.message))
            })
    };
}