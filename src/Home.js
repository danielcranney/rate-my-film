import React, { useState } from 'react';
import Content from './Content';
import { useSpring, animated, config } from 'react-spring';

const Home = () => {

    // Landing Page Springs
    const noDelay = useSpring({opacity: 1, from: {opacity: 0}, config: config.slow, delay: 100 });
    const mediumDelay = useSpring({opacity: 1, from: {opacity: 0}, config: config.slow, delay: 900 });
    const longDelay = useSpring({opacity: 1, from: {opacity: 0}, config: config.slow, delay: 1200 });
    const [showContent, setShowContent] = useState(false);
    
    return (
        <>
        { showContent ? <Content /> : (
            <main className="main-wrapper landing-bg">
      
              <div className="column landing-left">
                <animated.h5 style={noDelay}>CALLING ALL FILMMAKERS!</animated.h5>
                <animated.h1 style={noDelay}>Get to know your audience.</animated.h1>
                <animated.p style={mediumDelay}>Learn more about who your film might be suitable for, in just a few clicks.</animated.p>
                <animated.button
                  onClick={() =>
                    setShowContent(true)
                  }
                  style={longDelay} 
                  className="start-button">Get Started</animated.button>
              </div>
            </main>
          )}
          </>
    )
}

export default Home;
