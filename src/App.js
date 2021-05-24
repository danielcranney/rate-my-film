import React, { useState, createContext } from "react";
import Header from './Header';
import Footer from './Footer';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Home from './Home';
import About from "./About";

export const ShowContentContext = createContext({ showContent: false, setShowContent: () => {} });
export const AnswersContext = createContext({ answers: [], setAnswers: () => {} });

const App = () => {

  const [showContent, setShowContent] = useState(false);
  const [answers, setAnswers] = useState([]);

  return <>
  <Router>
    <ShowContentContext.Provider value={{showContent, setShowContent}}>
    <AnswersContext.Provider value={{answers, setAnswers}}>
      <div id="site-wrapper">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
    </Switch>
      <Footer />

    </div>
    </AnswersContext.Provider>
    </ShowContentContext.Provider>
  </Router>
    </>;
}

export default App;