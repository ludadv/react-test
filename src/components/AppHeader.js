import React from "react";
import { NavLink } from "react-router-dom";

class AppHeader extends React.Component {
    render() {
        return (
            <header className="App-header">
                <div className="header-logo">HEADER</div>
                <div className="header-menu">
                    <NavLink to="/" className="header-menu-item">Home</NavLink>
                    <NavLink to="/contact-form" className="header-menu-item">Contact form</NavLink>
                </div>
            </header>
        );
    }
}

export default AppHeader;
