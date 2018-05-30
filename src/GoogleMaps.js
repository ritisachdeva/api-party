import React, { Component } from 'react'
// import { Route, NavLink } from 'react-router-dom'

import './GoogleMaps.css'

class GoogleMaps extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          place: {}
        }
    
        this.fetchUserData(props)
      }
    
      componentWillReceiveProps = (newProps) => {
          const locationChanged = newProps.location !== this.props.location
          if (locationChanged){
            this.fetchUserData(newProps)
          }
      }
    
      fetchUserData = (props) => {
        fetch(`https://api.github.com/users/${props.match.params.googlePlace}`)
          .then(response => response.json())
          .then(place => this.setState({ place }))
      }

      render() {
        const {place} = this.state
      return (
        <div className="GoogleMaps">
  
  
        </div>
      )
    }
}

export default GoogleMaps