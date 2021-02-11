import React from 'react';
import '../App.css';
import techgawd from '../images/techgawd.jpg';
import avatar from '../images/avatar.png'
import aboutMe from "../images/aboutMe.png";
import Nav from './Nav';

function Bio() {
  return (
    <div className="App">
      <Nav />
      <section className="bio">
        <h1 className="debug">.</h1>
        <section className="bioSection">
          {/* <img alt="" className='mePic' src={techgawd} /> */}
          {/* <p className="bioText">Okay maybe I'm not a mother of actual dragons. I am a fan of the first seven seasons of Game of Thrones and I'm a mother of three human sons if that counts! </p> */}
          <img className='aboutMe' alt="" src={aboutMe} />
          {/* <img className='avatarPic' alt="" src={avatar} /> */}
        </section>

      </section>
      <footer className="bioFooter">
        @Liteworker 2021
    </footer>
    </div>
  );
}

export default Bio;