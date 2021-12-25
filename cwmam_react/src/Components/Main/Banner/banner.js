import React from 'react';
import './banner.css';
import "../../../../public/Media/banner1.png";

export default function banner() {
    return (
        <>
        <div className="banner">
            <div className="left-side">
                <h2>This is CodeWithMAM</h2>
            </div>
            <div className="right-side">
                <img src="../../../../public/Media/banner1.png" alt="Imge" />
            </div>
        </div>
        </>
    )
}
