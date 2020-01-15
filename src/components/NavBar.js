import React from 'react'
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
    render(){
        return(
            <div>
                {/* Image and text */}
                <nav className="navbar navbar-light bg-light">

                    <Link to='/' className="navbar-brand">
                        <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""/>
                        Bootstrap
                    </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">  
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        
                        <ul className="navbar-nav">

                            <li className="nav-item active">
                                <Link className="nav-link" to='#'>Home <span class="sr-only">(current)</span></Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to='#'>About Me</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to='#'>My Projects</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to='#'>Contact Me</Link>
                            </li>

                        </ul>

                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;