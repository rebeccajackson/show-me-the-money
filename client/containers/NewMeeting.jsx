import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

// import Nav from '../components/Nav'

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
      <React.Fragment>
        < div class="columns" >
          < div class="column is-half" >
            <input className="input" type="text" placeholder="Atendee Name"></input>
            <input className="input" type="number" placeholder="Atendee Hourly Wage"></input>
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
          </div >
        </div >

      </React.Fragment>
    )
  }
}

function MapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}

export default connect(null, MapDispatchToProps)(NewMeeting)

  // < div class="column" > Auto</div >
  //   <div class="column">Auto</div>