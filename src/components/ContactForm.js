import React from "react";

class ContactForm extends React.Component
{
    render() {
        return (
            <div
                className="contact-form"
                style={{ 'background-color': this.props['background-color'] ? this.props['background-color'] : 'antiquewhite'}}
            >
                <div className="contact-form-title" style={{color: this.props['title-color']}}>
                    {this.props.title}
                </div>
            </div>
       );
   }

   getColor() {
        return 'black;'
   }
}

export default ContactForm;
