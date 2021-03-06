import React from 'react'
import Swal from 'sweetalert2'

class Email extends React.Component{
    constructor(props) {
        super(props);
        this.state = { feedback: '', name: '', email: '' };
      }

      nameChange = (event) => {
        this.setState({name: event.target.value})
      }
      
      emailChange = (event) => {
        this.setState({email: event.target.value})
      }

      messageChange = (event) => {
        this.setState({feedback: event.target.value})
      }

    
      handleSubmit = (event) => {
        event.preventDefault();

        const templateId = 'basic';
    
        this.sendFeedback(templateId, {message: this.state.feedback, name: this.state.name, email: this.state.email})

      }
    
      sendFeedback = (templateId, variables) => {
        window.emailjs.send(
          'gmail', templateId,
          variables
          ).then(res => {
            // console.log('Email successfully sent!')
            Swal.fire({
              title: 'Email Successfully Sent',
              icon: 'success'
            })
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => {
            Swal.fire({
              title: 'Email Failed to Send',
              icon: 'error'
            })
            console.error('Email Error:', err)
          })
      }
    
      render() {
        return (
          <form className="test-mailing" onSubmit={this.handleSubmit}>

            <br/>
            <div style={{fontSize: "1.2rem"}}>

              <h6>You can also send me an email directly from here</h6>
              <div>
                  <label htmlFor="name">Name</label>
                  <input className="form-control email-inputs" name="user_name" type="text" id="name" onChange={this.nameChange} required/>
              </div>

              <div>
                  <label htmlFor="email">Email</label>
                  <input className="form-control email-inputs" name="user_email" type="text" id="email" onChange={this.emailChange} required/>
              </div>

              <label htmlFor="message">
                  Message
              </label>
              <div>
                <textarea
                  id="message"
                  name="message"
                  onChange={this.messageChange}
                  placeholder="Put your message here"
                  required
                  className="email-text-area form-control"
                  rows="15"
                  cols="20"
                />
              </div>

            </div>

            <input type="submit" value="Submit" className="btn btn-outline-light" />
          </form>
        )
      }
}

export default Email