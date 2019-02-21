import request from 'superagent'
import { getApiToken } from '../utils/auth'

const token = getApiToken()

export const SHOW_ERROR = 'SHOW_ERROR'
export const REQUEST_MEETINGS = 'REQUEST_MEETINGS'
export const RECEIVE_MEETINGS = 'RECEIVE_MEETINGS'

export const loading = () => {
    return {
        type: REQUEST_MEETINGS,
        loading: true
    }
}

export const receiveMeetings = meetings => {
    return {
        type: RECEIVE_MEETINGS,
        meetings: meetings,
        loading: false
    }
}

export function getMeeting(meetingId) {
    return {
        type: GET_MEETINGS,
        payload: meetings
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
        .get('api/v1/meetings')
        .set("Authorization", "Bearer " + token)
        .then(res => {
            dispatch(receiveMeetings(res.body))})
        .catch(err => {
            dispatch(showError(err.message))
    })
}}

export function getMeetings(meetingId) {
    return dispatch => {
        dispatch(loading())
        return request
        .get(`api/v1/meetings/${meetingId}`)
        .set("Authorization", "Bearer " + token)
        .then(res => {
            console.log(res.body)
            if(res.body.length == 1) {
                dispatch(showError('nothing g'))
            } else {
                dispatch(receiveMeetings(res.body))
            }
        })
        .catch(err => {
            dispatch(showError(err.message))
        })
    }}

