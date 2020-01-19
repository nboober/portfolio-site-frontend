import React from 'react'

class ProjectCards extends React.Component{
    render(){
        return(
            <div className="project-cards-container">
                <a href={this.props.project.deploy} target="_blank" rel="noopener noreferrer" className="card bg-dark text-white" >
                    <img className="card-img project-card-image" src={this.props.project.image} alt="project icon"/>
                    <div className="" >
                    <h5 className="card-title card-text">{this.props.project.title}</h5>
                    <p className="card-text card-text">{this.props.project.description}</p>
                    </div>
                </a>
            </div>
        )
    }
}

export default ProjectCards