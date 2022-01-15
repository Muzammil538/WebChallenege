import React from "react";
import "./Showcase.css";
import CodeSvg from "../../../Media/svg/code-solid.svg";
export default function Showcase() {
  return (
    <>
      <div className="heading">
        <h2>
          A Plateform to <code>Learn</code> , <code>Build</code> Your Startup.
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
          repellendus unde numquam obcaecati modi fugiat voluptates maiores
          atque cum aliquid architecto tenetur tempore, accusamus, velit ipsa
          veniam inventore eius porro?
        </p>
        <div className="card-btn">
          <button>
            <a href="#">Lets start</a>
          </button>
        </div>
      </div>
      <div className="showcase container">
        <div className="card">
          <div className="card-Img">
            <i class="fas fa-code"></i>
          </div>
          <div className="card-content">
            <div className="card-title">
              <h3>Tittle</h3>
            </div>
            <div className="card-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                incidunt facere aliquam distinctio unde est inventore nemo
                voluptas iure dolorum?
              </p>
            </div>
            <div className="card-btn">
              <button>
                <a href="#">Lets start</a>
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-Img">
            <i class="fas fa-code"></i>
          </div>
          <div className="card-content">
            <div className="card-title">
              <h3>Tittle</h3>
            </div>
            <div className="card-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                incidunt facere aliquam distinctio unde est inventore nemo
                voluptas iure dolorum?
              </p>
            </div>
            <div className="card-btn">
              <button>
                <a href="#">Lets start</a>
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-Img">
            <i class="fas fa-code"></i>
          </div>
          <div className="card-content">
            <div className="card-title">
              <h3>Tittle</h3>
            </div>
            <div className="card-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                incidunt facere aliquam distinctio unde est inventore nemo
                voluptas iure dolorum?
              </p>
            </div>
            <div className="card-btn">
              <button>
                <a href="#">Lets start</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
