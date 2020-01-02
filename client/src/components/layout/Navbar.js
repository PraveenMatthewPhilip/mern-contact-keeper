
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const Navbar = ({title}) => {

    return(
        <nav className="navbar navbar-dark bg-primary">
            <h1 className="navbar-brand">{title}</h1>
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link to='/' className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                <Link to='/about' className="nav-link">About</Link>
                </li>
            </ul>
        </nav>
    );
}

Navbar.defaultProps = {
    title: "Contact Keeper"
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}


export default Navbar;