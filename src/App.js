import React from "react";
import Header from './Header';
import Footer from './Footer';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Home from './Home';
import About from "./About";

const App = () => {

  return <>
  <Router>
    <div id="site-wrapper">
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
   </Switch>
    <Footer />

  </div>
  </Router>
    </>;
}

export default App;