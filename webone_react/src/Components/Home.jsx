import React from 'react';
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <>
            <nav>
                <ul>
                    <li> <Link to="./">Home</Link></li>
                </ul>
            </nav> 
        </>
    )
}


