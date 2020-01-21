import React from 'react'
import {Link} from 'react-router-dom'

class Error extends React.Component{
    render(){
        return(
            <div>
                <section class="page_404">
                <div class="container">
                    <div class="row">	
                    <div class="col-sm-12 ">
                    <div class="col-sm-10 col-sm-offset-1  text-center">
                    <div class="four_zero_four_bg">
                        <h1 class="text-center ">404</h1>
                    
                    
                    </div>
                    
                    <div class="contant_box_404">
                    <h3 class="h2">
                    Looks like you're lost
                    </h3>
                    
                    <p>the page you are looking for is not avaible!</p>
                    
                    <Link to="/" class="link_404">Go to Home</Link>
                    <p>Author
                    Naved khan
                    June 18, 2018</p>
                    </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Error