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
            meeting_in_progress: false

        }

        this.msToTime = this.msToTime.bind(this)
        this.meetingTimer = this.meetingTimer.bind(this)
        this.currentCost = this.currentCost.bind(this)
        this.endMeeting = this.endMeeting.bind(this)
        this.totalWage = this.totalWage.bind(this)
        this.interval = setInterval(this.meetingTimer, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidMount() {
        if(typeof this.props.attendees == 'object'){
            this.setState({meeting_in_progress: true})
            this.setState({start_time: new Date().getTime()})
            var total_wage = this.totalWage(this.props.attendees)
            this.setState({total_wage: total_wage})
        }
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
        return(((this.state.total_wage/3600000)*this.state.duration).toFixed(2))
    }

    endMeeting() {
        if(this.state.meeting_in_progress){
            clearInterval(this.interval);
            
            this.setState({end_time: (new Date().getTime())})
            
            var finishedMeeting = {
                title: this.state.meeting_name,
                owner_id: this.state.owner_id,
                start_time: this.state.start_time,
                end_time: this.state.end_time,
                duration: this.state.duration,
                total_cost: this.currentCost()
                
            }
        
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

    totalWage(attendees) {
        var wageArr = attendees.map((attendee) => {
            return attendee.hourlyWage
        })
        return wageArr.reduce((acc, cur) => {return Number(acc) + Number(cur)})


    }

    render(){
        var attendees = [{id:1, hourlyWage:10}, {id:2, hourlyWage:20}]
        this.totalWage(attendees)
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
    if(typeof state.meetings.newMeeting == 'object'){
        return {
            attendees: state.meetings.newMeeting.attendees,
            meeting_owner: state.meeting_owner,
            meeting_name: state.meeting_name,
        } 
    } else {
        return {}
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({saveMeeting: saveMeeting}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Meeting)