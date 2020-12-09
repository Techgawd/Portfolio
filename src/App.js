import React from 'react';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import { Route } from 'react-router-dom';
import Bio from './components/Bio';
import contact from './components/contact';



function App() {
  return (
    <div className="">
      <Route exact path="/" component={Home} />
      <Route path="/portfolio" component={Projects} />
      <Route path="/bio" component={Bio} />
      <Route path="/contact" component={contact} />
    </div>
  );
}

export default App;
