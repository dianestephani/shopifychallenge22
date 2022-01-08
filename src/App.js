import { React } from 'react';
import { app } from '../server';
import './App.css';
const cors = require("cors");

function App() {
  return (
    <div className='App'>
    
      <p>This is where the app renders</p>

    </div>
  );
}

app.use(cors);

export default App;
