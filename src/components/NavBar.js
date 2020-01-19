import React from 'react'
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
    render(){
        return(
            <div>
                {/* Image and text */}
                <nav className="navbar navbar-light bg-light">

                    <Link to='/' className="navbar-brand navBar-title">
                        <img src={require('../me.jpg')} className="d-inline-block align-top navbar-image" alt="profile-pic"/>
                        Nick Boober
                    </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">  
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to='/about'>About Me</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to='/projects'>My Projects</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to='/medium'>My Medium Posts</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to='/contact'>Contact Me</Link>
                            </li>

                        </ul>

                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;