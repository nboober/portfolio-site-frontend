import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Home from './components/Home'
import Contact from './components/Contact'

class App extends React.Component{
  render(){
    return(
      <div>

        <NavBar/>
        
        <Switch>

          <Route exact path="/" render={()=>{
            return <Home/>
          }}/>

          <Route exact path="/about" render={()=>{
            return <AboutMe/>
          }}/>

          <Route exact path="/projects" render={()=>{
            
            return <Projects/>

          }}/>

          <Route exact path="/contact" render={()=>{
            
            return <Contact/>

          }}/>

        </Switch>
      </div>
    )
  }
}

export default App;
