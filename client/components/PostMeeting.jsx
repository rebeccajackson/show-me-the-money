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
    if (this.props.meeting) {console.log(this.props.meeting.attendees[0].first_name)}
    return <React.Fragment>{this.props.meeting && <div className="container">
      <h2 className="title is-2">Review: {this.props.meeting.title}</h2>
      <h3>Duration: {this.props.meeting.duration}</h3>
      <h3>Total Cost: {this.props.meeting.cost}</h3>
      <br/>
      {/* <table className={'table is-bordered is-striped is-narrow is-hoverable is-fullwidth is-centered'}>
        <tbody>
          <tr>Attendees:</tr>
          {this.props.meeting.attendees.map((attendee, i) => {
            <tr>
              <td key={i}>{attendee.first_name}</td>
            </tr>
          })}
        </tbody>
      </table> */}
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