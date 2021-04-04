import React, { useState } from "react";
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useSpring, animated, config } from 'react-spring';

const App = () => {

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

  // Landing Page Springs
  const noDelay = useSpring({opacity: 1, from: {opacity: 0}, config: config.slow, delay: 100 });
  const shortDelay = useSpring({opacity: 1, from: {opacity: 0}, config: config.slow, delay: 500 });
  const mediumDelay = useSpring({opacity: 1, from: {opacity: 0}, config: config.slow, delay: 900 });
  const longDelay = useSpring({opacity: 1, from: {opacity: 0}, config: config.slow, delay: 1200 });
  const [showContent, setShowContent] = useState(false);

  return <>
    <div id="background-container">
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

      <div className="shape-3">
        <svg data-name="BG-Circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 450">
          <circle cx="245" cy="225" r="215" fill="#0ac700"/>
        </svg>
      </div>
      
    </div>

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
</>;
}

export default App;