import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './Google.css'
import GoogleMaps from './GoogleMaps'

class Google extends Component {
  state = {
    googlePlace: '',
  }

  handleChange = (ev) => {
    this.setState({ googlePlace: ev.target.value })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/google/${this.state.googlePlace}`)
  }

  render() {
    return (
      <div className="Google">
        <img
          src="https://png.icons8.com/color/1600/google-maps.png"
          alt="Google Maps"
          className="logo"
        />
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              value={this.state.googlePlace}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">Look up place</button>
          </div>
        </form>
        <Route path="/google/:googlePlace" component={GoogleMaps} />
        <Route exact path="/google" render={() => <h3>Please enter a place to search on Google Maps.</h3>} />
        <div className="map"></div>
      </div>
    )
  }
}

export default Google