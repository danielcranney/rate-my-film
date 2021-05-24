import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from './images/logo.svg';
import { AnswersContext, ShowContentContext } from './App';

const Header = () => {

  const [navbarOpen, setNavbarOpen] = useState(false);
  const { setAnswers, answers } = useContext(AnswersContext);
  const { setShowContent } = useContext(ShowContentContext);

  useEffect(() => {
    console.log(answers);
  }, [answers])


  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a href={`mailto:${email}${params}`} target="_blank" rel="noreferrer">{children}</a>;
  };

    return (
        <header>
          <div className="inner-wrapper">
            <div className="top-row">
              <div className="logo">
                <Logo width={50} height={50} />
                <Link to="/" onClick={() => {
                  setShowContent(false)
                  setAnswers([])
                }} className="active">Rate My Film</Link>
              </div>

              <button onClick={handleToggle}>
              <svg className="w-6 h-6" fill="none" stroke={navbarOpen ? "#ffffff" : "#a6aabb"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>

              </button>
            </div>
            
            
            <div className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
            <Link
                to='/'
                onClick={() => closeMenu()} className="link">Home</Link>

            <Link
                to='/about'
                onClick={() => closeMenu()} className="link">About</Link>

            <Mailto email="danieljamescranney@gmail.com" subject="Rate my Film" body="Hi!" onClick={() => closeMenu()} className="link"><span className="link">Contact</span></Mailto>

              </div>

          </div>
        </header>
    );
}

export default Header;
