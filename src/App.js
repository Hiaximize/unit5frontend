import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main.js'

function App() {
 
  fetch('https://calm-spire-04922.herokuapp.com/hello',{
    method: "GET",
    header: "no-cors"
  }).then(
    (data) => data.json()).then(jData =>
      console.log(jData))

  
  

  return (
    <div className="App">
        
          <Main />
        
       
    </div>
  );
}

export default App;
