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

    
      handleSubmit = () => {
        const templateId = 'basic';
    
        this.sendFeedback(templateId, {message: this.state.feedback, user_name: this.state.name, user_email: this.state.email})
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
          <form className="test-mailing">
            <h4>You can also send me an email directly from here</h4>
            <div>
                <label htmlFor="name">Name</label>
                <input name="user_name" type="text" id="name" onChange={this.nameChange} required value={this.state.name}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input name="user_email" type="text" id="email" onChange={this.emailChange} required value={this.state.email}/>
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                onChange={this.messageChange}
                placeholder="Put your message here"
                required
                value={this.state.feedback}
                style={{width: '50%', height: '150px'}}
              />
            </div>
            <input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
          </form>
        )
      }
}

export default Email