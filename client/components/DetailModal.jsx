import React, { Component } from "react";
import { connect } from "react-redux";
import AttendeeList from "../components/AttendeeList";
import { getMeeting } from "../actions/getMeetings";

export class DetailModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetingId: null,
      showAttendees: false,
      meetingData: ""
    };
    this.renderAttendees = this.renderAttendees.bind(this);
  }

  componentDidMount() {
    this.setState({
      meetingId: this.props.meetings.meetingId
    });
  }

  renderAttendees(id) {
    console.log(id);
    this.setState(prevState => ({
      showAttendees: !prevState.showAttendees
    }));
    this.props.getMeeting(id);
  }

  // Change ms to Time - duration
  msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = parseInt((duration / 1000) % 60),
      minutes = parseInt((duration / (1000 * 60)) % 60),
      hours = parseInt((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
  }

  render() {
    // {this.state.meetingdata = this.props.meeting.meetings.map(detail => {
    //   if (detail.id == this.props.meetings.meetingId) {
    //     return
    //   }
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
                if (detail.id == this.props.meeting.meetingId) {
                  return (
                    <div>
                      <img src="/dollar.svg" width="45px" />
                      <p>Name: {detail.title}</p>
                      <p>
                        Duration (H:M:S): {this.msToTime(detail.duration)}
                      </p>
                      <p>Cost: ${detail.cost}</p>
                      <br />
                      {this.state.renderAttendees && (
                        <AttendeeList id={this.props.meetingId} />
                      )}
                      <a
                        className="button is-primary is-outlined is-rounded"
                        onClick={() =>
                          this.renderAttendees(this.props.meetingId)
                        }
                      >
                        Show Attendees!
                      </a>
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

const mapStateToProps = ({ meetings, meetingId }) => {
  return {
    meetings,
    meetingId
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
