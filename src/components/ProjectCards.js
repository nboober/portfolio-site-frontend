import React from 'react'
import Swal from 'sweetalert2'

class ProjectCards extends React.Component{

    alert = () => {
        Swal.fire({
            title: 'Opening Project in new Window',
            text: "My project is opening. \n Please be patient, the frontend and backend of my projects are deployed on heroku and may take a few seconds to load.",
            icon: 'info'
          })
    }

    render(){
        return(
            <div className="project-cards-container" >
                <a href={this.props.project.deploy === "N/A" ? this.props.project.youtube : this.props.project.deploy } target="_blank" rel="noopener noreferrer" className="card bg-dark text-white" onClick={this.alert}>
                    <img className="card-img project-card-image" src={this.props.project.image} alt="project icon"/>
                    <div>
                    <h5 className="card-title card-text">{this.props.project.title}</h5>
                    <p className="card-text card-text">{this.props.project.description}</p>
                    </div>
                </a>
                    <a href={this.props.project.github} className="invert-color" target="_blank" rel="noopener noreferrer">
                        <img className="icon-size" src="https://res.cloudinary.com/dmfaehjot/image/upload/v1579459808/personal-portfolio/Font_Awesome_5_brands_github_nvfces.svg" alt="github icon"/>
                    </a>
            </div>
        )
    }
}

export default ProjectCards