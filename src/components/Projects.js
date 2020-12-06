import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
// import Nav from './Nav';
import Darkmode from '/Users/lambda_school_loaner_97/Documents/Graduate/portfolio2/src/images/Darkmode.png';
import ReducerToDo from '/Users/lambda_school_loaner_97/Documents/Graduate/portfolio2/src/images/Reducer-to-do.png';
import SmurfsRedux from '/Users/lambda_school_loaner_97/Documents/Graduate/portfolio2/src/images/SmurfsRedux.png';
import QuoteGenerator from '/Users/lambda_school_loaner_97/Documents/Graduate/portfolio2/src/images/QuoteGenerator.png';
import LiteworkerLogo_Horiz_Transparent from '/Users/lambda_school_loaner_97/Documents/Graduate/portfolio2/src/images/LiteworkerLogo_Horiz_Transparent.png';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className="App">
        <img className='logo' src={LiteworkerLogo_Horiz_Transparent} />
    <br />
    <Button variant="warning"><Link to="/portfolio">Portfolio</Link></Button>
    <Button variant="warning"><Link to="/bio">Bio</Link></Button>
    <Button variant="warning"><Link to="/contact">Contact</Link></Button>
<div className="projectSection">
 <div className="projectCard">
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Darkmode} />
  <Card.Body>
    <Card.Title>Dark Mode</Card.Title>
    <Card.Text>
      A project completed during Advanced React module at Lambda, working with custom hooks, implemented a "dark-mode" into a finance app.
    </Card.Text>
    <Button href="https://dark-mode-nu.now.sh/" variant="warning">Open</Button>
  </Card.Body>
</Card>
</div>
<div className="projectCard">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={ReducerToDo} />
  <Card.Body>
    <Card.Title>Reducer To-Do</Card.Title>
    <Card.Text>
      A project completed during Advanced React module at Lambda, working with custom hooks, implemented a "dark-mode" into a finance app.
    </Card.Text>
    <Button href="https://dark-mode-nu.now.sh/" variant="warning">Open</Button>
  </Card.Body>
</Card>
</div>
<div className="projectCard">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={SmurfsRedux} />
  <Card.Body>
    <Card.Title>Smurfs Redux</Card.Title>
    <Card.Text>
      A project completed during Advanced React module at Lambda, working with custom hooks, implemented a "dark-mode" into a finance app.
    </Card.Text>
    <Button href="https://dark-mode-nu.now.sh/" variant="warning">Open</Button>
  </Card.Body>
</Card>
</div>
<div className="projectCard">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={QuoteGenerator} />
  <Card.Body>
    <Card.Title>Quote App-API</Card.Title>
    <Card.Text>
      A project completed during Advanced React module at Lambda, working with custom hooks, implemented a "dark-mode" into a finance app.
    </Card.Text>
    <Button href="https://dark-mode-nu.now.sh/" variant="warning">Open</Button>
  </Card.Body>
</Card>
</div>
</div>
</div>
   
  );
}

export default Projects;
