import React from 'react';
import './navbar.css';

export default function Navbar() {
    function ToggleLink(){
        // console.log("down");
        const LinksDown = document.querySelector(".linksDown");
        const AccDown = document.querySelector(".accDown");
        if(AccDown.className === 'accDown down'){
            AccDown.classList.remove('down')
        }
        LinksDown.classList.toggle("down");

    }
    function ToggleAcc(){
        // console.log("down");
        const AccDown = document.querySelector(".accDown");
        const LinksDown = document.querySelector(".linksDown");
        if(LinksDown.className === 'linksDown down'){
            LinksDown.classList.remove('down')
        }
        AccDown.classList.toggle("down");
    }
    return (
        <>
        {/* Navbar */}
        <header>
            <div className="menu">
                <span>
                <i className="fas fa-bars" id='menu' onClick={ToggleLink}></i>
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
                <i className="far fa-user-circle" onClick={ToggleAcc}></i>
            </div>
            
        </header>
        <div className="linksDown">
            <a href="#">Services</a>
            <a href="#">Courses</a>
            <a href="#">Contact</a>
            <a href="#">About</a>
        </div>
        <div className="accDown">
            <a href="#">Sign In</a>
            <a href="#">Sign Up</a>
        </div>
        </>
    )
}

