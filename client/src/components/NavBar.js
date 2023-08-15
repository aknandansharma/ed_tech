import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to='/'>
                    <img
                        src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                        alt='Bootstrap'
                        width={40}
                        height={40}
                    />
                </Link>
                <Link className='navbar-brand' id="logoName" to='/'>
                    aknandan<span>Blog</span>
                </Link>
                <button
                    id="toggleBTN"
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNavAltMarkup'
                    aria-controls='navbarNavAltMarkup'
                    aria-expanded='true'
                    aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon' />
                </button>
                <div
                    className='collapse navbar-collapse'
                    id='navbarNavAltMarkup'>
                    <div id="navMain" className='navbar-nav ms-auto mb-2 mb-lg-0'>
                        <Link
                            className='nav-link active'
                            id="homeLink"
                            aria-current='page'
                            to='/'>
                            HOME
                        </Link>
                        <Link className='nav-link' id="aboutLink" to='/about'>
                            AboutME
                        </Link>
                        <Link className='nav-link' id="contactLink" to='/contact'>
                            ContactME
                        </Link>
                        <Link className='nav-link' id="signinLink" to='/signin'>
                            SIGNIN
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
