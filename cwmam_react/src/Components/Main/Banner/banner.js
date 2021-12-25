import React from 'react';
import './banner.css';
import Image from "../../../Media/banner1.png"

export default function banner() {
    return (
        <>
        <div className="banner">
            <div className="left-side">
                <h2>This is CodeWithMAM</h2>
            </div>
            <div className="right-side">
                <img src={Image} alt="Imge" />
            </div>
        </div>
        </>
    )
}
