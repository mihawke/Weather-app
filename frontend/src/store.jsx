import React, { Component } from 'react'

export class store extends React.Component {
    // The constructor function is where you initiate the component's properties.
    constructor(props){
        super(props);
        this.state ={
            appName: "Weather Report"
        }
    }
  render() {
    return (
      <div>store</div>
    )
  }
}

export default store