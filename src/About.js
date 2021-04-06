import React from 'react'

export default function About() {
    return (
        <main className="about-wrapper">
            <div className="about-section">
                    <div>
                        <h3>About</h3>
                        <p>Rate My Film was built in April 2021 by web developer and filmmaking teacher Daniel Cranney as a way to help student, amateur, no-budget or low-budget filmmakers learn more about how films are age rated in the UK, in a user-friendly and hassle-free way.</p>
                        <p>The <a href="https://www.bbfc.co.uk/" target="_blank" rel="noreferrer">British Board of Film Classification</a> (BBFC) are in charge of age rating films in the UK, and their website has plenty of information about what makes a film U-rated, or only suitable for over 18's (and everything in between).</p>
                        <p>Rate My Film is built using data made available by the BBFC (and some from IMDB, too), and while it can't give you an official rating, it can help you get a better idea of who your film might be suitable for, and why.</p>
                    </div>
                    <img src={`/img/logo_icon.svg`} alt=""/>
            </div>
        </main>
    )
}
