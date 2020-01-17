import React from 'react'
import MediumCards from './MediumCards'

class Medium extends React.Component{
    constructor(){
        super();
        this.state={
            medium: ""
        }
    }

    componentDidMount = () =>{
        fetch('http://localhost:3000/mediumposts')
        .then(response => response.json())
        .then(mediumItems => this.setState({medium: mediumItems}))
    }

    render(){
        return (
            <>
                {this.state.medium ? (
                    <div>
                        <h2>{this.state.medium.feed.description}</h2>
                        <div className="medium-container">
                            {this.state.medium.items.map((post)=>{
                                return <MediumCards key={post.title} post={post}/>
                            })}
                        </div>
                    </div>
                ) : null}
            </>
        )
    }
}

export default Medium