import React from 'react'

import {connect} from 'react-redux'
import { getMeetingById } from '../actions/getMeetings'

export class PostMeeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      meetingId: this.props.match.params.meetingId
    }
  }

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(getMeetingById(this.props.match.params.meetingId))
  }
    


  render() {
    console.log(this.props)
    return <React.Fragment>{this.props.meeting && <div className="container">
      <h2 className="title is-2">{this.props.meeting.title}</h2>
      <h3>Duration: {this.props.meeting.duration}</h3>
      <h3>Total Cost: </h3>
    </div>}</React.Fragment>
  }
}

function mapStateToProps(state) {

  return {
    meeting: state.meetings.meeting
  }
}

// todo:
// add owner name
// change duration to human readable format
// 





export default connect(mapStateToProps)(PostMeeting)