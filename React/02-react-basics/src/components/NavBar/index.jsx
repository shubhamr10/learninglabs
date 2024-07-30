import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container">
                <Link to={"/"} className="navbar-brand">Home</Link>
            </div>
        </nav>
    )
}

export default NavBar;