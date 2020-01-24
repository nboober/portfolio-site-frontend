import React from 'react'
import MediumCards from './MediumCards'
import Loading from './Loading'

class Medium extends React.Component{
    constructor(){
        super();
        this.state={
            medium: ""
        }
    }

    componentDidMount = () =>{
        fetch('https://nickboober-backend.herokuapp.com/mediumposts')
        .then(response => response.json())
        .then(mediumItems => this.setState({medium: mediumItems}))
    }

    render(){
        return (
            <div className="medium-container">
                {this.state.medium ? (
                    <div>
                        <h2>{this.state.medium.feed.description}</h2>
                        <div>
                            {this.state.medium.items.map((post)=>{
                                return <MediumCards key={post.title} post={post}/>
                            })}
                        </div>
                    </div>
                ) : <Loading/>}
            </div>
        )
    }
}

export default Medium