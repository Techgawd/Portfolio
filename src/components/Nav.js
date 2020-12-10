import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import LiteworkerLogo_Horiz_Transparent from '../images/LiteworkerLogo_Horiz_Transparent.png';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="App">
    <img className='logo' alt="" src={LiteworkerLogo_Horiz_Transparent} />
    <br />
    <Button bsClass="btn" variant="warning"><Link className="link" to="/">HOME</Link></Button>
    <Button variant="warning"><Link className="link" to="/portfolio">PORTFOLIO</Link></Button>
    <Button variant="warning"><Link className="link" to="/bio">BIO</Link></Button>
    <Button variant="warning"><Link className="link" to="/contact">CONTACT</Link></Button>
    {/* <Projects /> */}
    </div>
  );
}

export default Nav;