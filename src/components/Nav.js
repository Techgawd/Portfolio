import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Projects from './Projects';
import LiteworkerLogo_Horiz_Transparent from '/Users/lambda_school_loaner_97/Documents/Graduate/portfolio2/src/images/LiteworkerLogo_Horiz_Transparent.png';
import { Route, Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="App">
    <img className='logo' src={LiteworkerLogo_Horiz_Transparent} />
    <br />
    <Route exact path="/portfolio" component={Projects} />
    <Button variant="warning"><Link to="/portfolio">Portfolio</Link></Button>
    <Button variant="warning"><Link to="/bio">Bio</Link></Button>
    <Button variant="warning"><Link to="/contact">Contact</Link></Button>
    {/* <Projects /> */}
    </div>
  );
}

export default Nav;