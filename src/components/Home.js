import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component{
    render(){
        return(
            <div>
                <h2>
                    Hello! My name is Nick Boober
                </h2>

                <h3>
                    I am a Full Stack Web Developer.
                </h3>
                <Link to="/about">See my Profile</Link>
                <Link to="/contact">Contact Me</Link>
            </div>
        )
    }
}

export default Home