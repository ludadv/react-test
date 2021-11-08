import React from "react";

class ContactForm extends React.Component
{
    constructor(props) {
        super();

        this.state = {
            name: props.name,
        }
    }

    render() {
        return (
            <div
                className="contact-form"
                style={{ 'background-color': this.props['background-color'] ? this.props['background-color'] : 'antiquewhite'}}
            >
                <div className="contact-form-title" style={{color: this.props['title-color']}}>
                    {this.props.title}
                </div>
                <div className="contact-form-name">
                    <p>
                        { this.state.name ? 'Hello ' + this.state.name : '' }
                    </p>
                    <label className="mr-5" htmlFor="name">Name</label>
                    <input
                        value={this.state.name}
                        onChange={event => this.setState({ name: event.target.value })}
                        type="text"
                        id="name"
                    />
                    <a
                        onClick={event => this.clearInput(event)}
                        href="#"
                        className="ml-5"
                    >
                        &#10006;
                    </a>
                </div>
            </div>
       );
   }

   clearInput(event) {
        event.preventDefault();

       this.setState({ name: '' });
   }
}

export default ContactForm;
