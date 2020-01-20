import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component{
    render(){
        return(
            <div className="center-container">
                <div className="center">
                    <h1>
                        Hello! My name is Nick Boober
                    </h1>

                    <h2>
                        I am a Full Stack Developer
                    </h2>
                    <Link to="/about" className="btn btn-outline-primary">See my Profile</Link>
                    <Link to="/contact" className="btn btn-outline-success">Contact Me</Link>
                </div>
            </div>
        )
    }
}

export default Home