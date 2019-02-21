import React, { Component } from "react";
import { connect } from "react-redux";
// import { getMeeting } from "../actions/getMeetings";

export class DetailModal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.isShowing) {
      return (
        <div className="modal is-active">
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Meeting Details:</p>
              <button
                className="delete"
                aria-label="close"
                onClick={this.props.onHide}
              />
            </header>
            <section className="modal-card-body">
              {this.props.meeting.meetings.map(detail => {
                // Check MeetingHistory - need Object Keys: to compare id to id
                if (detail.id == this.props.meetingId) {
                  return (
                    <div>
                      <p>Name: {detail.title}</p>
                      <p>Duration: {detail.duration}</p>
                      <p>Cost: {detail.cost}</p>
                      <p>Attendees: {detail.attendees}</p>
                    </div>
                  );
                }
              })}
            </section>
            <footer className="modal-card-foot">
              <button className="button" onClick={this.props.onHide}>
                Close
              </button>
            </footer>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    meetings: state.meetings
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getMeeting: id => {
      dispatch(getMeeting(id));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailModal);
