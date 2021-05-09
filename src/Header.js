import React from 'react';
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from './images/logo.svg';

const Header = () => {

  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a href={`mailto:${email}${params}`} target="_blank" rel="noreferrer">{children}</a>;
  };

    return (
        <header>
          <div className="inner-wrapper">
            <div className="logo">
              <Logo />
              <Link to="/" className="active">Rate My Film</Link>
            </div>
            <nav className="navigation" id="navBar">
              <a href='index.html' className="icon" onClick={ (e) => {
                  e.preventDefault();
                  var nav = document.getElementById("navBar");
                    if (nav.className === "navigation") {
                      nav.className += " responsive";
                    } else {
                      nav.className = "navigation";
                    }
                }}>
                  <i className="fa fa-bars"></i>
                </a>

              {/* <Link to="/" className="block">Home</Link>  */}
              
              <Mailto email="danieljamescranney@gmail.com" subject="Rate my Film" body="Hi!">Contact</Mailto>
            </nav>
          </div>
        </header>
    );
}

export default Header;
