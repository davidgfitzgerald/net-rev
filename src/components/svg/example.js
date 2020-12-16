import React, {Component} from 'react';

class Example extends Component {
  render() {
    return (
      <div>
        <h1>Scaling an SVG with a <code>viewBox</code></h1>
        <svg className="defs-only" xmlns="http://www.w3.org/2000/svg">
          <linearGradient id="coin" x2="50%" y2="40%" spreadMethod="reflect">
            <stop stop-color="gold" offset="30%"/>
            <stop stop-color="goldenrod" offset="70%"/>
            <stop stop-color="white" offset="82%"/>
            <stop stop-color="gold" offset="92%"/>
            <stop stop-color="darkgoldenrod" offset="100%"/>
          </linearGradient>
          <radialGradient id="pot" fx="30%" fy="35%">
            <stop stop-color="white" offset="0%"/>
            <stop stop-color="gold" offset="15%"/>
            <stop stop-color="goldenrod" offset="80%"/>
            <stop stop-color="darkgoldenrod" offset="100%"/>
          </radialGradient>
          <symbol id="potofgold">
            <g fill="url(#coin)" stroke="darkgoldenrod" stroke-width="0.5">
              <circle r="5" transform="translate(30,7)"/>
              <circle r="5" transform="translate(35,13)"/>
              <circle r="5" transform="translate(22,10)"/>
              <circle r="5" transform="translate(27,9)"/>
              <circle r="5" transform="translate(18,17)"/>
              <circle r="5" transform="translate(42,18)"/>
              <circle r="5" transform="translate(32,19)"/>
              <circle r="5" transform="translate(30,14)"/>
              <circle r="5" transform="translate(25,15)"/>
              <circle r="5" transform="translate(37,19)"/>
              <circle r="5" transform="translate(31,16)"/>
              <circle r="5" transform="translate(20,18)"/>
              <circle r="5" transform="translate(26,21)"/>
            </g>
            <path fill="url(#pot)" stroke="#751" stroke-width="0.5"
                  d="M30,50 C45,50 55,45 55,35
                 Q 55,27 50,25 C55,22 53,15 45,20
                 S 23,25 15,20 S5,22 10,25
                 Q 5,27 5,35 C5,45 15,50 30,50Z"
            />
          </symbol>
        </svg>
        <figure>
          <figcaption>50x25</figcaption>
          <div>
            <svg viewBox="0 0 60 55" width="50" height="25">
              <use xlinkHref="#potofgold"/>
            </svg>
          </div>
        </figure>
        <figure>
          <figcaption>100x50</figcaption>
          <div>
            <svg viewBox="0 0 60 55" width="100" height="50">
              <use xlinkHref="#potofgold"/>
            </svg>
          </div>
        </figure>
        <figure>
          <figcaption>200x100</figcaption>
          <div>
            <svg viewBox="0 0 60 55" width="200" height="100">
              <use xlinkHref="#potofgold"/>
            </svg>
          </div>
        </figure>
        <figure>
          <figcaption>200x50</figcaption>
          <div>
            <svg viewBox="0 0 60 55" width="200" height="50">
              <use xlinkHref="#potofgold"/>
            </svg>
          </div>
        </figure>
        <figure>
          <figcaption>50x50</figcaption>
          <div>
            <svg viewBox="0 0 60 55" width="50" height="50">
              <use xlinkHref="#potofgold"/>
            </svg>
          </div>
        </figure>
        <figure>
          <figcaption>50x100</figcaption>
          <div>
            <svg viewBox="0 0 60 55" width="50" height="100">
              <use xlinkHref="#potofgold"/>
            </svg>
          </div>
        </figure>
      </div>
    );
  }
}

export default Example;