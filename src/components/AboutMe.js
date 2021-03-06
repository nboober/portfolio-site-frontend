import React from 'react';
import Pdf from '../resume.pdf';

class AboutMe extends React.Component{
    render(){
        return(
            <div className="center-container">
                <div className="center">
                    <div className="about-me-summary">
                        <h2>
                            Summary
                        </h2>
                        <div>
                            I am a recent graduate of FlatIron School in Washington D.C. I am experienced with building Front-End single page applications with React, Bootstrap, and Semantic. I am also experienced building Back-End Applications with Ruby on Rails, Java, and PostgreSQL. I am a fast learner who possesses strong skills in group environments and working under pressure. I am currently seeking opportunities to use and develop my skills on a business level.
                        </div>
                    </div>
                    <br/>
                    <h2>
                        My Skills
                    </h2>
                    
                    <div>
                        <div className="about-me-skills">
                            <h3>
                                Front-End
                            </h3>
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
                        </div>
    
                        <div className="about-me-skills">
                            <h3>
                                Styling
                            </h3>
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
                        </div>
                        
                        <div className="about-me-skills">
                            <h3>
                                Back-End
                            </h3>
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
                        </div>

                        <div className="about-me-skills">
                            <h3>
                                Databases
                            </h3>
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
    
                    </div>

                    <a href="https://medium.com/@skinsfannick" className="invert-color" target="_blank" rel="noopener noreferrer">
                        <img className="icon-size" src="https://res.cloudinary.com/dmfaehjot/image/upload/v1579545929/personal-portfolio/monogram-mask_v0i7mv.svg" alt="medium icon"/>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/nick-boober-96289a18a/" className="invert-color" target="_blank" rel="noopener noreferrer">
                        <img className="icon-size" src="https://res.cloudinary.com/dmfaehjot/image/upload/v1579545890/personal-portfolio/linkedin-300x300_sn1mq8.png" alt="linkedin icon"/>
                    </a>

                    <a href="https://github.com/nboober?tab=repositories" className="invert-color" target="_blank" rel="noopener noreferrer">
                        <img className="icon-size" src="https://res.cloudinary.com/dmfaehjot/image/upload/v1579459808/personal-portfolio/Font_Awesome_5_brands_github_nvfces.svg" alt="github icon"/>
                    </a>
                    <br/>
                    <a href={Pdf} target=" _blank" className="btn btn-outline-danger">Want to Look at my resume?</a>
    
                </div>
            </div>
        )
    }
}

export default AboutMe;