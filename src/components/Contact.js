import React from 'react';
import Email from './Email'

class Contact extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <div>
                        <b>Phone:</b> <span>240-477-2103</span>
                    </div>
                    <div>
                        <b>Email:</b> <span>nickboober92@gmail.com</span>
                    </div>
                </div>
                <Email/>
            </div>
        )
    }
}

export default Contact