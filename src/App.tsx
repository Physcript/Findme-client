import React, { useEffect } from 'react';
import io from 'socket.io-client'
import './App.css';



function App() {

  useEffect(() => {
    const socket = io('http://localhost:1337')

    socket.on('register', () => {
      console.log('detected')
    })
  },[])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
