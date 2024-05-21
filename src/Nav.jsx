import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

const Nav = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <header >
            <div className="logo">SuperCar Central</div>
            <nav className={`nav-container ${isActive ? 'active' : ''}`}>
                <ul className="nav-items">
                    <li><HashLink to="#home">Home</HashLink></li>
                    <li><HashLink to="#more">Explore</HashLink></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#about">About</a></li>
                    <li><HashLink to="#contact">Contact Us</HashLink></li>
                </ul>
                <div className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>
    );
};

export default Nav;
