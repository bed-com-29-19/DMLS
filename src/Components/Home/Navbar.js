import React, { useState } from "react";
import Logo from "../images/logo.png";
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className="navbar-container">
                <div className="navbar-logo">
                    <Link to='/'>
                        <img alt="logo" src={Logo}></img>
                    </Link>
                </div>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <div className="nav-List">
                    <ul className="nav-menu">
                        {/* <li className="nav-item">
                            <Link to='/aboutUs' className='nav-links' onClick={closeMobileMenu}>
                               About Us
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </>)
}
export default Navbar;