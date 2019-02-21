import React, { Component } from 'react'
import { connect } from 'react-redux'

import { saveMeeting } from '../actions/getMeetings'
import { bindActionCreators } from 'redux';

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
            total_wage: 0,
            show_history: false,
            //temp var while waiting for NewMeeting container vvv
            total_wage_temp: 10000000,
            meeting_in_progress: true

        }

        this.msToTime = this.msToTime.bind(this)
        this.meetingTimer = this.meetingTimer.bind(this)
        this.currentCost = this.currentCost.bind(this)
        this.endMeeting = this.endMeeting.bind(this)
        this.interval = setInterval(this.meetingTimer, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidMount() {
        this.setState({start_time: new Date().getTime()})
        // remove console logs after NewMeeting container finished 
        console.log(this.state.attendees)
        console.log(this.state.total_wage)
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

    currentCost() {
        // rename vars when NewMeeting container is finished
        return(((this.state.total_wage_temp/3600000)*this.state.duration).toFixed(2))

    }

    endMeeting() {
        if(this.state.meeting_in_progress){
            clearInterval(this.interval);
            // var end_time = (new Date().getTime())
            // this.setState({end_time: end_time})
            
            // var duration = (end_time - this.state.start_time)
            // this.setState({duration: duration})
            
            this.setState({end_time: (new Date().getTime())})
            // this.setState({duration: (this.state.end_time - this.state.start_time)})
            
            var finishedMeeting = {
                title: this.state.meeting_name,
                owner_id: this.state.owner_id,
                start_time: this.state.start_time,
                // end_time: end_time,
                end_time: this.state.end_time,
                // duration: duration,
                duration: this.state.duration
                
            }

            // this.state.currentCost
        
            this.props.saveMeeting(finishedMeeting)

            this.setState({meeting_in_progress: false})
        }

        

    }

    meetingTimer() {
        if(this.state.meeting_in_progress){
            var currentTime = new Date().getTime()
            var duration = (Math.round((currentTime - this.state.start_time)/1000))*1000
            this.setState({duration}) 
        }
       
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
                    <h1>${this.currentCost()}</h1>
                </div>
                <br />
                <div>
                    <button
                    className="button is-large"
                    onClick={() => this.endMeeting()}>

                        End Meeting
                    </button>
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
        // total_wage: 
        // temp_total_wage
    //     .map((attendee) => {
    //         attendee.hourlyWage
    //     })
    //     .reduce((acc, cur) => {return acc + cur})
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({saveMeeting: saveMeeting}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Meeting)