import React from 'react'
import { Link } from 'react-router-dom'
import "../index.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="header">
                <div className="navbar-logo"></div>
                <div className="brand-name">ALPHA</div>
            </div>

            <div className="pages">
                <Link to="/" className="home" >Home</Link>
                <Link to="/services" className="services" >Services</Link>
                <Link to="/projects" className="projects" >Projects</Link>
                <Link to="/contact" className="contact" >Contact</Link>
                <Link to="/login" >
                    <button className="sign-in">LOGIN</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar