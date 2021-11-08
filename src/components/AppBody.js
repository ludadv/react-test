import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ContactFormPage from "../pages/ContactFormPage";

class AppBody extends React.Component {
    render() {
        return (
            <div className="App-body">
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/contact-form' element={<ContactFormPage />} />
                </Routes>
            </div>
        );
    }
}

export default AppBody;
