import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Projects from './Projects';
import LiteworkerLogo_Horiz_Transparent from '../images/LiteworkerLogo_Horiz_Transparent.png';
import headshot from '../images/headshot.JPG';
import border from '../images/border.png';
import avatar from '../images/avatar.png'
import { Route, Link } from 'react-router-dom';
// import Slider from './Slider';
// import { Col } from 'shards-react';


function Home() {
  return (
    <div className="App">
      <img className='logo' alt="" src={LiteworkerLogo_Horiz_Transparent} />
      <br />
      <Route exact path="/portfolio" component={Projects} />
      <Button variant="warning"><Link className="link" to="/">HOME</Link></Button>
      <Button variant="warning"><Link className="link" to="/portfolio">PORTFOLIO</Link></Button>
      <Button variant="warning"><Link className="link" to="/bio">BIO</Link></Button>
      <Button variant="warning"><Link className="link" to="/contact">CONTACT</Link></Button>
      <section className="home">
        {/* <img className='border' alt="" src={border} /> */}
        <div className="heroSection">
          <h2 className='hero'>Hi, I'm Angela Williams<br /><br /><br />Frontend Developer, Medium writer, Tarot reader, yoga teacher and mother of dragons ;)</h2>
          <img className='headshot' alt="" src={headshot} />

          <div className="avatarSection">
            <div className='avatar1'>
              {/* <h1 class="bounce">An animated element</h1> */}
              {/* <ul>
      <li class="bounce">React</li>
      <li class="bounce">CSS</li>
      <li class="bounce">HTML</li>
      <li class="bounce">Javascript</li>
      </ul> */}
            </div>
            <div className='avatar2'>
              <img className='avatarPic' alt="" src={avatar} />
            </div>
            <div className='avatar3'>
              {/* <h1 class="bounce">An animated element</h1> */}
              {/* <ul>
                <li class="bounce">React</li>
                <li class="bounce">CSS</li>
                <li class="bounce">HTML</li>
                <li class="bounce">Javascript</li>
              </ul> */}
            </div>
          </div>
        </div>
        <footer>
          @Liteworker 2021
    </footer>
      </section>
    </div>
  );
}

export default Home;