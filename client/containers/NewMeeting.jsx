import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { createMeeting } from "../actions/getMeetings";

class NewMeeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attendees: [],
      first_name: "",
      last_name: "",
      hourly_wage: "",
      meeting_owner: "",
      meeting_name: "",
      show_history: false
    };
  }

  componentDidMount() {
    this.setState({ meeting_owner: this.props.meeting_owner });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.createMeeting(this.state);
    this.props.history.push("/meeting");
  };

  handleAdd = () => {
    var newAttendee = {
      firstName: this.state.first_name,
      lastName: this.state.last_name,
      hourlyWage: this.state.hourly_wage
    };

    let curAttendees = this.state.attendees;
    curAttendees.push(newAttendee);
    this.setState({
      attendees: curAttendees,
      first_name: "",
      last_name: "",
      hourly_wage: ""
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="columns">
        <div className="column is-half">
          <h2>Add Meeting Attendees Below</h2>
          <input
            className="input"
            type="text"
            name="first_name"
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <input
            className="input"
            type="text"
            name="last_name"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <input
            className="input"
            type="number"
            name="hourly_wage"
            placeholder="Attendee Hourly Wage"
            onChange={this.handleChange}
          />
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" onClick={this.handleAdd}>
                Add
              </button>
              <div className="control">
                <form>
                  <input
                    className="input"
                    type="text"
                    name="meeting_name"
                    placeholder="Meeting Name"
                    onChange={this.handleChange}
                    required
                  />
                  <button
                    className="button is-link"
                    type="submit"
                    onClick={this.handleSubmit}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <ul>
            {this.state.attendees.map(attendee => {
              return (
                <li>
                  {attendee.firstName} {attendee.lastName}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

function MapDispatchToProps(dispatch) {
  return bindActionCreators({ createMeeting }, dispatch);
}

function mapStateToProps(state) {
  return {
    meeting_owner: state.auth.user.user_name
  };
}

export default connect(
  mapStateToProps,
  MapDispatchToProps
)(NewMeeting);
