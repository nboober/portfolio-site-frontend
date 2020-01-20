import React from 'react';
import Email from './Email'

class Contact extends React.Component{
    render(){
        return(
            <div className="center-container">
                <div className="center">
                    <div>
                        <h3>
                            <b>Phone:</b> <span>240-477-2103</span>
                        </h3>
                        <h3>
                            <b>Email:</b> <span>nickboober92@gmail.com</span>
                        </h3>
                    </div>
                    <Email/>
                </div>
            </div>
        )
    }
}

export default Contact