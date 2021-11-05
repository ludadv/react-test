import React from "react";

class ContactForm extends React.Component
{
    constructor() {
        super();

        this.state = {
            name: 'z',
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
                        Hello {this.state.name}
                    </p>
                    <label htmlFor="name">Name</label>
                    <input
                        value={this.state.name}
                        onChange={event => this.setState({ name: event.target.value })}
                        type="text"
                        id="name"
                    />
                </div>
            </div>
       );
   }

   getColor() {
        return 'black;'
   }
}

export default ContactForm;
