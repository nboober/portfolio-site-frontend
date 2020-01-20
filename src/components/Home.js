import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component{
    render(){
        return(
            <div className="home-container">
                <div className="center">
                    <h2>
                        Hello! My name is Nick Boober
                    </h2>

                    <h3>
                        I am a Full Stack Web Developer.
                    </h3>
                    <Link to="/about" className="btn btn-outline-primary">See my Profile</Link>
                    <Link to="/contact" className="btn btn-outline-success">Contact Me</Link>
                </div>
            </div>
        )
    }
}

export default Home