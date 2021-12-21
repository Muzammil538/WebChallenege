import React from 'react';
import './navbar.css';

export default function Navbar() {
    return (
        <>
        <header>
            <div className="menu">
                <span>
                <i class="fas fa-bars"></i>
                </span>
            </div>
            <div className="logo">
                <h2><span>Code</span><span>With</span><span>MAM</span></h2>
            </div>
            <div className="links">
                <a href="#">Services</a>
                <a href="#">Courses</a>
                <a href="#">Contact</a>
                <a href="#">About</a>
                <div className="account">
                    <a href="#">Sign In</a>
                    <a href="#">Sign Up</a>
                </div>
            </div>
            <div className="panel">
                <a href="#"><i class="far fa-user-circle"></i></a>
            </div>
        </header>
        </>
    )
}

