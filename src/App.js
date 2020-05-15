import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Nav from './Nav/Nav'
import SimpleSlider from './Carousel/Carousel'
import Foot from './Footer/Footer'
import './App.css';
import Mov from './Nos Valeur/notrevaleur';
import Contact from './Contact/Contact'

function App() {
  return (
    <div className="App">
      <Nav />
      <Contact />
      <SimpleSlider />
      <Mov />
      <Foot />
    </div>
  );
}

export default App;
