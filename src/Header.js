import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {

  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a href={`mailto:${email}${params}`} target="_blank" rel="noreferrer">{children}</a>;
  };

    return (
        <header>
          <nav className="navigation" id="navBar">
            <Link to="/" className="active logo"><img src="/img/logo_icon.svg" width="50px" height="50px" alt="Temporary Logo"></img> Rate My Film</Link>
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
              
            {/* <Link to="/about" className="block">About</Link> */}
            {/* <a href="https://www.bbfc.co.uk/" target="_blank" rel="noreferrer" className="block">Visit BBFC</a> */}
            <Mailto email="danieljamescranney@gmail.com" subject="Rate my Film" body="Hi!">Contact</Mailto>
          </nav>
        </header>
    );
}

export default Header;
