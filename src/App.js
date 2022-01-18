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
 //In render method, (will modify lines 31-33): looping through this.state.apiResponse. Each iteration of the forEach loop is going to give one of my items from the back end, AKA a row of the table. Google how to output a table or list in React.

export default App;
