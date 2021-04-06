import React from "react";
import Header from './Header';
import Footer from './Footer';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from './Home';
import About from "./About";

const App = () => {

  // Background Scroll Function
  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );

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