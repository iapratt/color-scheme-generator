import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../src/assets/palette-logo.png'


function Header() {
    return (
        <div className='header'>
            <div className='logo-title'>
                <img src={logo} alt="logo" className="logo" />
                <p>Color Scheme Generator</p>
            </div>

            <div className='nav-links'>
                <Link to="/" className='header-link'>Home</Link>
                <Link to="/generator" className='header-link'>Generator</Link>
            </div>
        </div>
    )
}
export default Header