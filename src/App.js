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
    {/* <div id="background-container">
      <div className="shape-1">
        <svg data-name="BG-Triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 460">
          <path d="M72.8 40.5l-53 368.1c-4.2 28.9 24.5 51.5 51.7 40.7l345.2-138.1c27.2-10.9 32.4-47 9.4-65.1l-292.2-230c-23-18-56.9-4.5-61.1 24.4z"/>
        </svg>
      </div>

      <div className="shape-2">
      <svg data-name="BG-Triangle-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 460">
        <path d="M72.8 40.5l-53 368.1c-4.2 28.9 24.5 51.5 51.7 40.7l345.2-138.1c27.2-10.9 32.4-47 9.4-65.1l-292.2-230c-23-18-56.9-4.5-61.1 24.4z"/>
      </svg>
      </div>
      
    </div> */}

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