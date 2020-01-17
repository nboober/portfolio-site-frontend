import React from 'react'

class Medium extends React.Component{

    componentDidMount = () =>{
        fetch('http://localhost:3000/mediumposts')
        .then(response => response.json())
        .then(mediumItems => console.log(mediumItems))
    }

    render(){
        return (
            <div>
                Medium Posts
            </div>
        )
    }
}

export default Medium