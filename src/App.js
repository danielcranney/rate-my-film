import React from "react";
import Header from './Header';
import Footer from './Footer';
import {
  // Route,
  BrowserRouter as Router,
  // Switch
} from "react-router-dom";
// import Home from './Home';
// import About from "./About";

const App = () => {

  return <>
  <Router>
    <div id="site-wrapper">
    <Header />
    {/* <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
   </Switch> */}

   <main className="main-wrapper main-wrapper flex-column justify-content-center align-items-start landing-bg">
   
   <h1>Back soon...</h1>
     <p>This site is currently undergoing maintenance.</p>
   </main>


    <Footer />

  </div>
  </Router>
    </>;
}

export default App;