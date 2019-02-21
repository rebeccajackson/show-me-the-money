import React, { Component } from 'react'
import { connect } from 'react-redux'

class Meeting extends Component {
    constructor(props){
        super()
        const state = {

        }
    }
    render(){
        console.log(this.state)
        return (
            <div>
                <h2>In Meeting Component!</h2>
            </div>
        )
    }
}

// state referrs to the global store
function mapStateToProps (state) {
    return {}
}

export default connect(mapStateToProps)(Meeting)