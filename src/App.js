import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from "./pages/Landing";
import Story from "./pages/Story";
import Portfolio from "./pages/Portfolio";
import Techs from "./pages/Techs";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/story" render={() => (
          <>
            <Story />
            <Footer />
          </>
        )} />
        <Route exact path="/portfolio" render={() => (
          <>
            <Portfolio />
            <Footer />
          </>
        )} />
        <Route exact path="/skills" render={() => (
          <>
            <Techs />
            <Footer />
          </>
        )} />
        <Route exact path="/contact" render={() => (
          <>
            <Contact />
            <Footer />
          </>
        )} />
      </Switch>
    </Router>
  );
}

export default App;
