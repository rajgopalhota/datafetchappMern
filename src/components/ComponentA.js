import React, { Component } from 'react'

export default class ComponentA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "Raja"
      }
    }
    
  render() {
    return (
      <div>
        <h3>Hai My Name is : {this.state.name}</h3>
      </div>
    )
  }
}