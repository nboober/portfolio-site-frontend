import React from 'react'

class MediumCards extends React.Component{
    render(){
        return(
            <div className="medium-cards-container">
                <a href={this.props.post.link} target="_blank" rel="noopener noreferrer" className="card bg-dark text-white" >
                    <img className="card-img medium-card-image" src={this.props.post.thumbnail} alt="medium post thumbnail"/>
                    <h4 className="hidden-text">Check It Out</h4>
                    <div className="" >
                    <h5 className="card-title card-text">{this.props.post.title}</h5>
                    <p className="card-text card-text">Posted on: {this.props.post.pubDate}</p>
                    </div>
                </a>
            </div>
        )
    }
}

export default MediumCards