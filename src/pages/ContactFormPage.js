import React from "react";
import ContactForm from "../components/ContactForm";

class ContactFormPage extends React.Component {
    render() {
        return (
            <div className="contact-form-page">
                <h1>Contact form page</h1>
                <ContactForm
                    title="First contact form"
                    title-color="red"
                />
                <ContactForm
                    title="Second contact form"
                    title-color="green"
                    background-color="#f7e0c0"
                />
            </div>
        );
    }
}


export default ContactFormPage
