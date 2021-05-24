import React, { useContext } from 'react';
import { useSpring, animated, config } from 'react-spring';
import Content from './Content';
import { ShowContentContext } from './App';

const Home = () => {

    // Landing Page Springs
    const noDelay = useSpring({opacity: 1, from: {opacity: 0}, config: config.slow, delay: 100 });
    const mediumDelay = useSpring({opacity: 1, from: {opacity: 0}, config: config.slow, delay: 900 });
    const longDelay = useSpring({opacity: 1, from: {opacity: 0}, config: config.slow, delay: 1200 });

    const { showContent, setShowContent } = useContext(ShowContentContext);
    
    return (
        <>
        { showContent ? <Content /> : (
            <main className="main-wrapper intro-bg">

              <div className="inner-wrapper">
                <div className="intro column">
                  <animated.p style={noDelay} className="sublead">Are you a filmmaker?</animated.p>
                  <animated.h1 style={noDelay}>Get to know your audience.</animated.h1>
                  <animated.p style={mediumDelay}>Learn more about who your film is suitable for, and find similar films in under 60 seconds.</animated.p>
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
        </>
    )
}

export default Home;
