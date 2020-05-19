import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./Nav/Nav";
import "./App.css";
import Accueil from "./Accueil";
import Inscription from "./Inscription";
import favoris from "./Films";
import Films from "./Films";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Accueil} />
        <Route path="/sign" component={Inscription} />
        <Route path="/films" component={Films} />
        <Route path="/films#favoris" component={favoris} />
      </div>
    </BrowserRouter>
  );
}

export default App;
