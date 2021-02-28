import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from "./pages/Landing";
import Story from "./pages/Story";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/story" component={Story} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
