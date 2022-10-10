import React, { useState, useEffect } from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import axios from 'axios';

function App() {
  const [response, setResponse] = useState("");
  const serverURL = "http://localhost:8081/";

  useEffect(() => {
    axios.get(serverURL).then(res => {
      setResponse(res.data);
    });
  }, [])

  return (
    <div className="App">
      <Homepage />
      <p>{response}</p>
    </div>
  );
}

export default App;
