import React from 'react'

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
            console.log('Email successfully sent!')
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Email Error:', err))
      }
    
      render() {
        return (
          <form className="test-mailing" onSubmit={this.handleSubmit}>

            <h5>You can also send me an email directly from here</h5>

            <div>
                <label htmlFor="name">Name</label>
                <input name="user_name" type="text" id="name" onChange={this.nameChange} required/>
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input name="user_email" type="text" id="email" onChange={this.emailChange} required/>
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
                style={{width: '50%', height: '150px'}}
              />
            </div>

            <input type="submit" value="Submit" className="btn btn--submit" />
          </form>
        )
      }
}

export default Email