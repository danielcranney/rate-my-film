import React, { useState, createContext } from 'react';
import Content from './Content';
import { useSpring, animated, config } from 'react-spring';

export const ShowContentContext = createContext({ showContent: false, setShowContent: () => {} });

const Home = () => {

    // Landing Page Springs
    const noDelay = useSpring({opacity: 1, from: {opacity: 0}, config: config.slow, delay: 100 });
    const mediumDelay = useSpring({opacity: 1, from: {opacity: 0}, config: config.slow, delay: 900 });
    const longDelay = useSpring({opacity: 1, from: {opacity: 0}, config: config.slow, delay: 1200 });
    const [showContent, setShowContent] = useState(false);
    
    return (
      <ShowContentContext.Provider value={{showContent, setShowContent}}>
        { showContent ? <Content /> : (
            <main className="main-wrapper intro-bg">

              <div className="inner-wrapper">
                <div className="intro column">
                  <animated.p style={noDelay} className="sublead">Are you a filmmaker?</animated.p>
                  <animated.h1 style={noDelay}>Get to know your audience.</animated.h1>
                  <animated.h1 style={noDelay}>Find out who your film is suitable for.</animated.h1>
                  <animated.p style={mediumDelay}>In just a few clicks, you can learn more about who your film might be suitable for.</animated.p>
                  <animated.button
                    onClick={() =>
                      setShowContent(true)
                    }
                    style={longDelay} 
                    className="start-button">Get Started</animated.button>
                </div>
              </div>

            </main>
          )}
          </ShowContentContext.Provider>
    )
}

export default Home;
