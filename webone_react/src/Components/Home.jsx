import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
export default function Home() {
    return (
        <>
            <nav>
            <li className="t-Logo"><Link to="./" >WEBTEACH</Link></li>
                <ul className="Links">
                    <li><Link to="./">Services</Link></li>
                    <li><Link to="./">Courses</Link></li>
                    <li><Link to="./">About</Link></li>
                    <li><Link to="./">Contact</Link></li>
                </ul>
            </nav>
            
        </>
    )
}


