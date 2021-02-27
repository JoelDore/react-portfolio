import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from "./pages/Landing";
import Story from "./pages/Story";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Route exact path="/" component={Landing} />
        <Route exact path="/story" component={Story} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </Router>
    </>
  );
}

export default App;
