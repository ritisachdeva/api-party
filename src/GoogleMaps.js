import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'

import './GoogleMaps.css'

class GoogleMaps extends Component {
    render(){
        return(
            <div className="GoogleMaps">
                <img
                    src="https://png.icons8.com/color/1600/google-maps.png"
                    alt="Google Maps"
                    className="logo"
                />
                <form onSubmit={this.handleSubmit}>
            <div>
                <input
                    type="text"
                //   value={this.state.username}
                //   onChange={this.handleChange}
                />
            </div>
            <div>
                <button type="submit">Look up a place</button>
            </div>
            </form>
            <Route path="/googlemaps/:username" component={GoogleMaps} />
            <Route exact path="/googlemaps" render={() => <h3>Please enter a place to search on GoogleMaps.</h3>} />
            </div>
        )
    }
}

export default GoogleMaps