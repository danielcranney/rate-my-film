import React from 'react'

const Header = () => {
    return (
    <div className="header">
      <div>
        <a href="index.html"><img src="/img/logo.svg" width="200px" height="71px" alt="Temporary Logo" /></a>
      </div>
      <nav>
        <a href="http://">About</a>
        <a href="http://">Donate</a>
        <a href="http://">Visit BBFC</a>
        <a href="http://">Contact</a>
      </nav>
    </div>
    )
}

export default Header;
