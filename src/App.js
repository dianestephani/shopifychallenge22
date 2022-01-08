import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
      {/* Contains routes for Home and Add Components */}
      
        
          {/* Home and Add component routes inside a Switch, only shows one at a time */}
          <Routes>
            <Route path = '/' element = {<Home />} />
            {/* <Route path = '/add' component = {Add} /> */}

          </Routes>
        




      </Router>
      

    </div>
  );
}

export default App;
