import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe'
import NavBar from './components/NavBar'
import Projects from './components/Projects'

class App extends React.Component{
  render(){
    return(
      <div>

        <NavBar/>
        
        <Switch>

          <AboutMe/>

          <Projects/>

        </Switch>
      </div>
    )
  }
}

export default App;
