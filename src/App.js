import React from 'react';
import './App.css';
import School from './school.js';
import About from './about.js';
import Tech from './tech.js';

function App(){
  return (
    <div className = "App">
      <School langName = "HTML,CSS" frameWork = "Bootstrap"/>
      
      <School langName = "Wordpress" frameWork = "Asyn Rust"/>
        <hr />
      <About />
        <hr />
      <Tech ml = "Machine Learning" langName = "HTML,CSS" langName2= "Rust, Javascript" langName3 = "React"/>
    </div>
    

  );
}

export default App; //App.js is exported to index.js
