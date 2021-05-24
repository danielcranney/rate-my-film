import React from 'react'

const About = () => {
    return (
        <main className="main-wrapper intro-bg">
            <div className="inner-wrapper">
                <div className="about-section">
                        <div>
                            <h1>About</h1>
                            <p>Rate My Film was built in April 2021 by web developer and teacher Dan Cranney.</p>
                            <p>If you're writing a script or producing a film, it's often difficult to know who your film might be suitable for. Perhaps it features bad language, or scenes of violence that might not be suitable for young children. It's important to be aware of this if your film is going to appeal to your target audience.</p>
                            <p>Rate My Film lets students and amateur filmmakers makes this process simple, and in just a few clicks you can learn more about who your film is suitable for (and find some similar films at the same time!).</p>
                            <p>We would also like to make our visitors aware that Rate My Film is a demonstration tool only and is not in any way affiliated with any official certification organisation. Furthermore it is not intended as a replacement for services that are required by law if you are to release your film to the public.</p>
                        </div>
                        <img src={`/img/logo_icon.svg`} alt=""/>
                </div>
            </div>
        </main>
    );
}

export default About;
