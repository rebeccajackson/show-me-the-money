import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllMeetings } from "../actions/getMeetings";

export class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "", // need chart data
      meetingID: "", // get meeting by id: need function to get all meetings
      displayGraph: true, // could toggle use Sparklines
      meetings: ""
    };
  }

  // handleclick for link to show
  handleClick = e => {
    console.log(e);
  };

  render() {
    return (
      <div className="history-page">
        <section className="hero is-dark">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Meeting History</h1>
              <h2 className="subtitle">
                Select from the below list of options to see an extended history
              </h2>
            </div>
          </div>
        </section>
        <div className="columns">
          <div className="tile is-parent column is-half">
            <article className="tile is-child notification is-danger">
              <p className="title">put list of meetings here</p>
              {this.props.meetings.meetings.map(meeting => {
                console.log(meeting);
                // add a handleclick event to link on data name
              })}
              <div className="content" />
            </article>
          </div>
          <div className="column is-half">
            <article className="tile is-child notification is-danger">
              <p>graph here</p>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    meetings: state.meetings
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllMeetings: () => {
      dispatch(getAllMeetings());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
