import React from 'react';
import './App.css';
import School from './school.js';

function App(){
  return (
    <div className = "App">
      <School langName = "HTML,CSS" frameWork = "Bootstrap"/>
      <hr />
      <School langName = "Wordpress" frameWork = "Asyn Rust"/>
    </div>
  );
}



export default App; //App.js is exported to index.js
