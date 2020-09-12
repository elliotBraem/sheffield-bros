import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';

import alex from '../static/alex.jpg';
import elliot from '../static/elliot.jpg';
import bobby from '../static/bobby.jpg';

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hi, we're the boys of Sheffield
        </p>
        <div className="inlineBlock" >
          <a href="https://www.instagram.com/alex__saddler/" target="_blank" >
            <img src={alex} alt="flex boy" className="roomiePic" />
          </a>
          <a href="https://www.instagram.com/efizzysnaps/" target="_blank" >
            <img src={elliot} alt="clean boy" className="roomiePic" />
          </a>
          <Link to="/taken">
            <img src={bobby} alt="study kid" className="roomiePic" />
          </Link>
        </div>
        <h1>Tune in for more later!</h1>
      </header>
    </div>
  );
}
