import React from 'react'
import { Link } from 'react-router-dom'
import "./css/navbar.css"

const Navbar = () => {
    return (
        <>
            <nav className='nav '>
                <h1 className='logo'>Job<span className='logo-spn'>Ready</span></h1>
                <div className="nav-options">
                    <ul className='nav-ul'>
                        <li>
                            <Link className='link-nav' to="/">Home</Link>
                        </li>
                        <li>
                            <Link className='link-nav' to="/about">About</Link>
                        </li>
                        <li>
                            <Link className='link-nav' to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link className='link-nav' to="/jobs">Jobs</Link>
                        </li>
                    </ul>

                    <div className="div-btn">
                        <Link className='btn btn-hover' to="/signin">Signin</Link>
                        <Link className='btn btn-bg' to="/signup">Signup</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
