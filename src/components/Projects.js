import React from 'react';
import ProjectCards from './ProjectCards'

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
        fetch('http://localhost:3000/projects')
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
            <div>
            <>
                {this.state.reactProjects ? (
                    <div className="project-container">
                        <h2>React/ Ruby Projects</h2>
                        <div >
                            {this.state.reactProjects.map((project)=>{
                                return <ProjectCards key={project.title} project={project}/>
                            })}
                        </div>

                        <h2>Javascript/ Ruby Projects</h2>
                        <div >
                            {this.state.javascriptProjects.map((project)=>{
                                return <ProjectCards key={project.title} project={project}/>
                            })}
                        </div>

                        <h2>Ruby Projects</h2>
                        <div >
                            {this.state.rubyProjects.map((project)=>{
                                return <ProjectCards key={project.title} project={project}/>
                            })}
                        </div>

                        <h2>Java Projects</h2>
                        <div >
                            {this.state.javaProjects.map((project)=>{
                                return <ProjectCards key={project.title} project={project}/>
                            })}
                        </div>
                    </div>
                ) : null}
            </>
            </div>
        )
    }
}

export default Projects;