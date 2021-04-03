import React, { useState } from "react";
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useSpring, animated, config, toggle } from 'react-spring';

const App = () => {

  const noDelay = useSpring({opacity: 1, from: {opacity: 0}, config: config.slow, delay: 100 });
  const shortDelay = useSpring({opacity: 1, from: {opacity: 0}, config: config.slow, delay: 500 });
  const mediumDelay = useSpring({opacity: 1, from: {opacity: 0}, config: config.slow, delay: 900 });
  const longDelay = useSpring({opacity: 1, from: {opacity: 0}, config: config.slow, delay: 1200 });
  const [showContent, setShowContent] = useState(false);

  return (
    <div id="site-wrapper">
    <Header />
    { showContent ? <Content /> : (
      <main className="main-wrapper">

        <div className="w-50 p-2 column landing-left">
          <animated.h1 style={noDelay}>Are you a filmmaker?</animated.h1>
          <animated.h2 style={shortDelay} >Get your film rated for free.</animated.h2>
          <animated.p style={mediumDelay}>Find out how the British Board of Film Classification would (probably) rate your film.</animated.p>
          <animated.button
            onClick={() =>
              setShowContent(true)
            }
            style={longDelay} 
            className="start-button">Get Started</animated.button>
        </div>
        <animated.div style={shortDelay} className="w-50 p-2 circle-bg">
        <animated.img src="/img/rmf-export.png" style={mediumDelay} className="mockup" />
        </animated.div>

      </main>
    )}
    <Footer />

  </div>
  );
}

export default App;