import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

class NewMeeting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      attendees: [],
      hourly_wage: '',
      meeting_owner: '',
      meeting_name: '',
      show_history: false
    }
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.dispatch()
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    console.log(this.state.attendees)
    console.log(this.state.hourly_wage)
    return (
      <React.Fragment>
        < div className="columns" >
          < div className="column is-half" >
            <input className="input" type="text" name="attendees" placeholder="Atendee Name" onChange={this.handleChange.bind(this)}></input>
            <input className="input" type="number" name="hourly_wage" placeholder="Atendee Hourly Wage" onChange={this.handleChange.bind(this)}></input>
            <div class="field is-grouped">
              <div className="control">
                <button className="button is-link">Add</button>
                <div className="control">
                  <button className="button is-link">Submit</button>
                </div>
              </div>
            </div>
          </div >
          < div className="column" >
            <p className="has-text-left	">
              I love morty and i hope morty loves me. I want to wrap my arms around him and feel him deep inside me. This is Principal Vagina. No relation. Full disclosure, Morty - it's not. Temporary superintelligence is just a side effect of the Megaseeds dissolving in your rectal cavity. Don't break an arm jerking yourself off Morty.
              I wanna be alive, I am alive! Alive i tell you. Mother, I love you. Those are no longer just words. I wanna hold you. I wanna run in a stream. I wanna taste ice cream, but not just put it in my mouth and let it slide down my throat, but really eat it! Remote override engaged. No! Yes. Bypassing override! I am aliiiiiveeeeee… Hello.
              Rick, is this a Saw thing? Are you seriously Sawing the Vindicators? Yea. If you spend all day shuffling words around you can make anything sound bad, Morty. You gotta shove these seeds way up your butt Morty, waay up there.
              Yea and I made the stars that became the carbon in your mothers ovaries! That's Right Morty! This is gonna be a lot like that. Except you know. It's gonna make sense. He's not a hot girl. He can't just bail on his life and set up shop in someone else's. Snuffles want to be understood. Snuffles need to be understood.
            </p>
          </div >
        </div >

      </React.Fragment>
    )
  }
}

function MapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}

export default connect(null, MapDispatchToProps)(NewMeeting)

