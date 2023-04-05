import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navb from './Components/navbar';
import About from './Components/About';
import Carous from './Components/Carousel';




function App() {
  return (
    <div className="App">
    <Navb/>
   <About/>
   <Carous/>
     </div>
  );
}

export default App;
