import React from "react";
import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Photos</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">About</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
