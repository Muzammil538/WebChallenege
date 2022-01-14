import React from "react";
import "./banner.css";
import Image1 from "../../../Media/banner1.png";
import Mam from "../../../Media/mam.png";

export default function banner() {
  window.addEventListener("load", () => {
    document.querySelector("#Image1").classList.add("left");
    document.querySelector(".banner_span1").classList.add("right");
    document.querySelector(".banner_span2").classList.add("right");
    document.querySelector(".banner_span3").classList.add("right");
  });
  return (
    <>
      <div className="banner">
        <div className="left-side">
          <div className="introd">
            <img src={Mam} alt="MAM" />
            {/* <div className="demo"></div> */}
            <div className="cloud-text">
              <p>
                I am the Developer and the C.E.O of CodeWithMAM. This is the
                platform where you can coding for the least price never
                expected.
              </p>
            </div>
          </div>
          <h2> This is MAM </h2>
          <h2 className="banner_text">
            
            And This is <span className="banner_span1">Code</span>
            <span className="banner_span2">With</span>
            <span className="banner_span3">MAM</span>
          </h2>
        </div>
        <div className="right-side">
          <img src={Image1} alt="Imge" id="Image1" />
        </div>
      </div>
    </>
  );
}
