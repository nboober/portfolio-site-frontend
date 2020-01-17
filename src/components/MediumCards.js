import React from 'react'

class MediumCards extends React.Component{
    render(){
        return(
            <div className="medium-cards-container">
                <a href={this.props.post.link} target="_blank" className="card bg-dark text-white" >
                    <img className="card-img" src={this.props.post.thumbnail} alt="medium post thumbnail"/>
                    <div className="card-img-overlay" >
                    <h5 className="card-title card-text-shadow">{this.props.post.title}</h5>
                    <p className="card-text card-text-shadow">Posted on: {this.props.post.pubDate}</p>
                    </div>
                </a>
            </div>
        )
    }
}

export default MediumCards