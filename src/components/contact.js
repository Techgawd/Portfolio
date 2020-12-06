import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
    <Button variant="warning">Contact</Button>
    {/* <Projects /> */}
    <div className="form">
    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
    </div>
  );
}

export default Nav;