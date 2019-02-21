import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

class NewMeeting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      attendees: [],
      hourly_wage: '',
      meeting_owner: '',
      meeting_name: '',
      show_history: false
    }
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.dispatch()
  }

  handleAdd(e) {
    e.preventDefault()

    this.setState({ attendees:...this.state.attendees })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    console.log(this.state.attendees)
    console.log(this.state.hourly_wage)
    return (
      <React.Fragment>
        < div className="columns" >
          < div className="column is-half" >
            <input className="input" type="text" name="attendees" placeholder="Atendee Name" onChange={this.handleChange.bind(this)}></input>
            <input className="input" type="number" name="hourly_wage" placeholder="Atendee Hourly Wage" onChange={this.handleChange.bind(this)}></input>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Add</button>
                <div className="control">
                  <input className="input" type="text" name="meeting_owner" placeholder="Meeting Owner" onChange={this.handleChange.bind(this)}></input>
                  <input className="input" type="text" name="meeting_name" placeholder="Meeting Name" onChange={this.handleChange.bind(this)}></input>
                  <button className="button is-link">Submit</button>
                </div>
              </div>
            </div>
          </div >
          < div className="column" >
            <ul>
              {this.state.att_hourly.map( => {
                return (
                  <li>{}</li>
              )
            })}
            </ul>
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

