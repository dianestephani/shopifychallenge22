import React, { Component } from 'react';
import './App.css';


class App extends Component {
  //constructor function sets default state
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };

}
//1. Calling server via fetch using LH9000/testAPI route. Retrieving text and using that to set state.
callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

//Calls the callAPI method once the component mounts. Built-in function.
componentDidMount() {
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


export default App;
