import React, { Component } from "react";
import { connect } from "react-redux";

export class MeetingHistory extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="tile is-parent column">
          <article className="tile is-child notification is-danger">
            <p className="title">Meeting History</p>
            {this.props.meetings.meetings.map(meeting => {
              return (
                <a
                  className="button is-fullwidth is-danger is-inverted is-outlined"
                  key={meeting.id}
                  value={meeting.name}
                  name={meeting.name}
                  onClick={event => {
                    this.props.handleClick(event);
                  }}
                >
                  {meeting.title}
                  {/* {meeting.startTime} TODO: ADD DATE - is this startTime? */}
                </a>
              );
            })}
          </article>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    meetings: state.meetings
  };
};

export default connect(
  mapStateToProps,
  null
)(MeetingHistory);
