import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

class NewMeeting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      attendees: [],
      meeting_owner: '',
      meeting_name: '',
      show_history: false
    }
  }
  render() {
    return (
      <React.Component>

      </React.Component>
    )
  }
}

function MapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}

export default connect(null, MapDispatchToProps)(NewMeeting)