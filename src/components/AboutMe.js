import React from 'react';
import Pdf from '../resume.pdf';

class AboutMe extends React.Component{
    render(){
        return(
            <div className="center-container">
                <div className="center">
                    <h2>
                        Summary
                    </h2>
                    <div>
                        I am a recent graduate of FlatIron School in Washington D.C. I am experienced with building asynchronous, single page applications using Ruby on Rails, React, Bootstrap, and PostgreSQL. I am a fast learner who possesses strong skills in group environments and working under pressure. I am currently seeking opportunities to use and develop my skills on a business level.
                    </div>
    
                    <h2>
                        My Skills
                    </h2>
                    
                    <div>
                        <h4>
                            Front-End
                        </h4>
                        <ul className="remove-bullet">
                            <li>
                                HTML5
                            </li>
                            <li>
                                JavaScript
                            </li>
                            <li>
                                React
                            </li>
                        </ul>
    
                        <h4>
                            Styling
                        </h4>
                        <ul className="remove-bullet">
                            <li>
                                CSS
                            </li>
                            <li>
                                Bootstrap
                            </li>
                            <li>
                                Semantic
                            </li>
                        </ul>
    
                        <h4>
                            Back-End
                        </h4>
                        <ul className="remove-bullet">
                            <li>
                                Ruby/ Ruby on Rails
                            </li>
                            <li>
                                Java
                            </li>
                            <li>
                                Spring Boot w/ Thymeleaf
                            </li>
                            <li>
                                Spring Security
                            </li>
                        </ul>
    
                        <h4>
                            Databases
                        </h4>
                        <ul className="remove-bullet">
                            <li>
                                PostgreSQL
                            </li>
                            <li>
                                SQLite
                            </li>
                            <li>
                                MySQL
                            </li>
                        </ul>
    
                    </div>
                    <a href={Pdf} target=" _blank" className="btn btn-outline-danger">Want to Look at my resume?</a>
    
                </div>
            </div>
        )
    }
}

export default AboutMe;