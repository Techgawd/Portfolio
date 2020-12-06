import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import LiteworkerLogo_Horiz_Transparent from '/Users/lambda_school_loaner_97/Documents/Graduate/portfolio2/src/images/LiteworkerLogo_Horiz_Transparent.png';
import techgawd from '/Users/lambda_school_loaner_97/Documents/Graduate/portfolio2/src/images/techgawd.jpg';
import { Route, Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="App">
    <img className='logo' src={LiteworkerLogo_Horiz_Transparent} />
    <br />
    <Button variant="warning"><Link to="/portfolio">Portfolio</Link></Button>
    <Button variant="warning"><Link to="/bio">Bio</Link></Button>
    <Button variant="warning"><Link to="/contact">Contact</Link></Button>
    {/* <Projects /> */}
    <h1>Bio</h1>
    <img className='mePic' src={techgawd} />
    </div>
  );
}

export default Nav;