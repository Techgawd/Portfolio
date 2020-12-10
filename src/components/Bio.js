import React from 'react';
import '../App.css';
import techgawd from '../images/techgawd.jpg';
import avatar from '../images/avatar.png'
import Nav from './Nav';

function Bio() {
  return (
    <div className="App">
    <Nav />
    <section className="bio">
    <h1 className="debug"></h1>
    <section className="bioSection">
    <img className='mePic' src={techgawd} />
    <p>I am Angela and I will write lots of stuff here</p>
    <img className='avatarPic' alt=""  src={avatar} />
    </section>

    </section>
    </div>
  );
}

export default Bio;