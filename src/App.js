import React from 'react';
import './App.css';
// import Projects from './components/Projects';
import Nav from './components/Nav';
import Projects from './components/Projects';
import { Route } from 'react-router-dom';
import Bio from './components/Bio';
import contact from './components/contact';


function App() {
  return (
    <div className="">
      <Route exact path="/" component={Nav} />
      <Route path="/portfolio" component={Projects} />
      <Route path="/bio" component={Bio} />
      <Route path="/contact" component={contact} />
    {/* <Nav />
    <Projects /> */}
    {/* <h1>App</h1> */}
    </div>
  );
}

export default App;
