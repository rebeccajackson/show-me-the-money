import React, { Component } from "react";
import { connect } from "react-redux";

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
              {/* pass meetings array in via props and map over array to get data put in a link tag*/}
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

// const mapStateToProps = (state) => {
// return {

//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {

//   }
// }

export default connect()(History);
// mapStateToProps,
// mapDispatchToProps
