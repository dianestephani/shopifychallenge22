import { React, Component } from 'react';
import './App.css';
// const cors = require("cors");
// const express = require('express');

class App extends Component() {
  //constructor function sets default state
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

//Calling the test api I created
callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

//Calls the callAPI method once the component mounts
componentWillMount() {
    this.callAPI();
}

  //Renders info to the page
  render() {
    return (
      //Returns info from the API
      <div className='App'>
        <p className="App-intro">;{this.state.apiResponse}</p>
      </div>
    );
  }
}

// app.use(cors);

export default App;
