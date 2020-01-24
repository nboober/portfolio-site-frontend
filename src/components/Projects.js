import React from 'react';
import ProjectCards from './ProjectCards'
import Loading from './Loading'

class Projects extends React.Component{
    constructor(){
        super();
        this.state={
            reactProjects: [],
            javascriptProjects: [],
            rubyProjects: [],
            javaProjects: []
        }
    }

    componentDidMount = () => {
        fetch('https://nickboober-backend.herokuapp.com/projects')
        .then(response => response.json())
        .then(projects => {
            projects.map((project)=>{
                if(project.language.toLowerCase().includes("react")){

                    this.setState({reactProjects: [...this.state.reactProjects, project]})
    
                }else if(project.language.toLowerCase().includes("javascript")){
    
                    this.setState({javascriptProjects: [...this.state.javascriptProjects, project]})
    
                }else if(project.language.toLowerCase().includes("ruby")){
    
                    this.setState({rubyProjects: [...this.state.rubyProjects, project]})
    
                }else if(project.language.toLowerCase().includes("javaback")){
    
                    this.setState({javaProjects: [...this.state.javaProjects, project]})
    
                }
            })
        })
        
    }

    render(){
        return(
            <div className="project-container">

                <h2>React/ Ruby Projects</h2>
                {this.state.reactProjects.length > 0 ? (
                    <div>
                        <div>
                        {this.state.reactProjects.map((project)=>{
                            return <ProjectCards key={project.title} project={project}/>
                        })}
                        </div>
                        
                    </div>
                ) : <Loading/>}

                <h2>Javascript/ Ruby Projects</h2>
                {this.state.javascriptProjects.length > 0 ? (
                    <div>
                        <div>
                        {this.state.javascriptProjects.map((project)=>{
                            return <ProjectCards key={project.title} project={project}/>
                        })}
                        </div>
                    </div>
                ) : <Loading/>}

                <h2>Ruby Projects</h2>
                {this.state.rubyProjects.length > 0 ? (
                    <div>
                        <div>
                        {this.state.rubyProjects.map((project)=>{
                            return <ProjectCards key={project.title} project={project}/>
                        })}
                        </div>
                    </div>
                ) : <Loading/>}

                <h2>Java Projects</h2>
                {this.state.javaProjects.length > 0 ? (
                    <div>
                        <div>
                            {this.state.javaProjects.map((project)=>{
                                return <ProjectCards key={project.title} project={project}/>
                            })}
                        </div>
                    </div>
                ) : <Loading/>}

            </div>
        )
    }
}

export default Projects;