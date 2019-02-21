import React from 'react'

import {connect} from 'react-redux'
import { getAllMeetings } from '../actions/getMeetings'

class PostMeeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(getAllMeetings())
  }
    


  render() {
    console.log(this.props)
    return <div className="container">
      <h2 className="title is-2">Meeting Review</h2>
    </div>
  }
}

export default connect()(PostMeeting)
