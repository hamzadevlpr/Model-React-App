import React from 'react'
import logo from '../Assets/logo.png'
import '../Navbar/Navbar.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Navbar() {
    const navlistitems = ["Home","Models","About","Contact"];
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top mt-3">
                <div className="container-fluid">
                    <div className="navbar-brand" href="/">
                        <img src={logo} alt="Model Logo" className='logo' />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">{navlistitems[0]}</a>
                            </li>
                            <li className="nav-item dropdown ">
                                <a className="nav-link active" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {navlistitems[1]}<ArrowDropDownIcon />
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/">All</a></li>
                                    <li><a className="dropdown-item" href="/">Male</a></li>
                                    <li><a className="dropdown-item" href="/">Female</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">{navlistitems[2]}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">{navlistitems[3]}</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn shortlist-btn m-3" type="submit">Short List</button>
                            <div className="d-flex" style={{Height:"200px"}}>
                                <div className="vr border"></div>
                            </div>
                            <button className="btn signup-btn m-3" type="submit">Sign up</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar