import React from 'react'

const Header = () => {

    return (
        <header>
          <nav class="navigation" id="navBar">
            <a href={'/index.html'} class="active logo"><img src="/img/logo.svg" width="200px" height="71px" alt="Temporary Logo" /></a>
            <a href="javascript:void(0);" class="icon" onClick={ () => {
                var nav = document.getElementById("navBar");
                  if (nav.className === "navigation") {
                    nav.className += " responsive";
                  } else {
                    nav.className = "navigation";
                  }
              }}>
                <i class="fa fa-bars"></i>
              </a>
              
            <a href="http://" className="block">About</a>
            <a href="http://" className="block">Donate</a>
            <a href="https://www.bbfc.co.uk/" target="_blank" rel="noreferrer" className="block">Visit BBFC</a>
            <a href="http://" className="block">Contact</a>
          </nav>
        </header>
    );
}

export default Header;
