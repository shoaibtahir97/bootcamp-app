import React from 'react';
import './App.css';
import School from './school.js';
import About from './about.js';

function App(){
  return (
    <div className = "App">
      <School langName = "HTML,CSS" frameWork = "Bootstrap"/>
      
      <School langName = "Wordpress" frameWork = "Asyn Rust"/>
      <hr />
      <About />
    </div>

  );
}



export default App; //App.js is exported to index.js
