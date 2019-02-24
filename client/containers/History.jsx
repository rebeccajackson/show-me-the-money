// Breaking up imports by type can make it easier to differentiate
// on first glance what has and hasn't been imported
import React, { Component } from "react";
import { connect } from "react-redux";

import { getAllMeetings, setMeetingId } from "../actions/getMeetings";

import MeetingHistory from "../components/MeetingHistory";
import DetailModal from "../components/DetailModal";

import { LineChart } from "react-easy-chart";

export class History extends Component {
  constructor(props) {
    super(props);
    // initial state for this container
    this.state = {
      meetingId: null,
      graphData: "", // need data for chart
      displayGraph: true, // could toggle view- use Sparklines
      meetings: [],
      showModal: false,
      loading: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.setMeetingId = this.setMeetingId.bind(this);
  }

  // sets the meetingId on the global store to match this meetings Id
  setMeetingId = id => {
    this.props.setMeetingId(id);
  };

  // handleclick for link to show
  handleClick = event => {
    this.setMeetingId(event.target.value);
    this.setState({
      meetingId: event.target.value,
      showModal: true
    });
  };

  handleClose() {
    this.setState({ showModal: false });
  }

  // display meetings with state
  componentDidMount() {
    this.props.getAllMeetings();
  }

  componentDidUpdate() {
    if (this.state.loading && this.props.meetings.meetings.length > 0)
      this.setState({ meetings: this.props.meetings.meetings, loading: false });
  }

  render() {
    // this could be brought out into a function
    let costOverTime = [[]];
    this.state.meetings.map(meeting =>
      costOverTime[0].push({ x: meeting.id, y: meeting.cost })
    );
    // this.state.meetings array is ordered most recent to oldest
    // costOverTime is reversed so oldest entries are plotted first
    costOverTime[0] = costOverTime[0].reverse();
    console.log(costOverTime);
    return (
      <div className="history-page">
        <section className="hero is-dark">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Meeting History</h1>
              <h2 className="subtitle">
                Select from the below list of options for more info
              </h2>
            </div>
          </div>
        </section>
        <div className="columns all-history">
          <MeetingHistory handleClick={this.handleClick} />
          <DetailModal
            isShowing={this.state.showModal}
            onHide={this.handleClose}
            meetingId={this.state.meetingId}
            meeting={this.props.meetings}
          />
          <div className="column is-half">
            <article className="tile is-child notification ">
              {/* When loading is finished &  set to false display chart */}
              {!this.state.loading && (
                <LineChart
                  grid
                  axes
                  xType={"text"}
                  width={500}
                  height={600}
                  data={costOverTime}
                />
              )}
            </article>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ meetings, meetingId }) => {
  return {
    meetings,
    meetingId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllMeetings: () => {
      dispatch(getAllMeetings());
    },
    getMeetings: id => {
      dispatch(getMeetingById(id));
    },
    setMeetingId: id => {
      dispatch(setMeetingId(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
