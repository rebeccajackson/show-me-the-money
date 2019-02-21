import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllMeetings } from "../actions/getMeetings";
import MeetingHistory from "../components/MeetingHistory";
import DetailModal from "../components/DetailModal";
import Chart from "../components/Chart";

export class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetingId: null,
      graphData: "", // need data for chart
      displayGraph: true, // could toggle view- use Sparklines
      meetings: [],
      showModal: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  // handleclick for link to show
  handleClick = event => {
    console.log("event :", event.target.value);
    this.setState({
      meetingId: event.target.value, //should be id: currently title
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

  render() {
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
            <article className="tile is-child notification is-danger">
              <Chart data={this.state.data} color="red" />
            </article>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("meetings: ", state);
  return {
    meetings: state.meetings
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllMeetings: () => {
      dispatch(getAllMeetings());
    },
    getMeetings: id => {
      dispatch(getMeeting(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
