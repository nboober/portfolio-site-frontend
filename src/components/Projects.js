import React from 'react';

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
                My Projects
            </div>
        )
    }
}

export default Projects;