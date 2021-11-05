import React from "react";
import ContactForm from "./ContactForm";

class AppBody extends React.Component {
    render() {
        return (
            <div className="App-body">
                BODY
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

export default AppBody;
