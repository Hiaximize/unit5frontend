import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main.js'

function App() {
 
  fetch('http://localhost:3000/test',{
    method: "GET",
    mode: "no-cors"
  }).then(data=>console.log(JSON.stringify(data)))
      

  return (
    <div className="App">
        
          <Main />
        
       
    </div>
  );
}

export default App;
