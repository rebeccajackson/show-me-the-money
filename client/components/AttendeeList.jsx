import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMeetings } from "../actions/getMeetings";

export class AttendeeList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.meetings.meetings.map(attendee => {
            return <li>Attendee: {attendee.first_name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    meetings: state.meeting
  };
};

const mapDispatchToProps = {
  getMeetings: id => dispatchEvent(getMeetings(id))
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AttendeeList);
