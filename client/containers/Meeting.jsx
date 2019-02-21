import React, { Component } from 'react'
import { connect } from 'react-redux'

class Meeting extends Component {
    constructor(props){
        super(props)
        this.state = {
            start_time: 0,
            end_time: null,
            attendees: [],
            meeting_owner: '',
            meeting_name: '',
            duration: 0,
            show_history: false

        }
        this.msToTime = this.msToTime.bind(this)
        this.meetingTimer = this.meetingTimer.bind(this)
        this.interval = setInterval(this.meetingTimer, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidMount() {
        this.setState({start_time: new Date().getTime()})
    }

    msToTime() {
        let duration = this.state.duration
        // var milliseconds = parseInt((duration%1000)/100)
            , seconds = parseInt((duration/1000)%60)
            , minutes = parseInt((duration/(1000*60))%60)
            , hours = parseInt((duration/(1000*60*60))%24);
    
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
    
        return (hours + ":" + minutes + ":" + seconds)
    }


    meetingTimer() {
        var currentTime = new Date().getTime()
        var duration = (Math.round((currentTime - this.state.start_time)/1000))*1000
        this.setState({duration})
    }

    render(){
        return (
            <div>
                <div>
                    <h1 className="title is-1">{this.msToTime()}</h1>
                </div>
                <br />
                <div>
                    $ Meeting Cost $
                </div>
            </div>
        )
    }
}

// state referrs to the global store
function mapStateToProps (state) {
    return {
        attendees: state.attendees,
        meeting_owner: state.meeting_owner,
        meeting_name: state.meeting_name,
    }
}

export default connect(mapStateToProps)(Meeting)