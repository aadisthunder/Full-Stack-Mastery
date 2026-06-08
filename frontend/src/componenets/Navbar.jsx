import React from 'react'
import "../index.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="header">
                <div className="navbar-logo"></div>
                <div className="brand-name">ALPHA</div>
            </div>

            <div className="pages">
                <div className="home">Home</div>
                <div className="services">Services</div>
                <div className="projects">Projects</div>
                <div className="contact">Contact</div>
                <button className="sign-in">LOGIN</button>
            </div>
        </div>
    )
}

export default Navbar