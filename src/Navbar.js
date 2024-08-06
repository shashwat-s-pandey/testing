import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav style={{padding: 10}}>
            <Link to='/' style={{paddingRight: 20}}>Home</Link>
            <Link to='/contact' style={{paddingRight: 20}}>Contact</Link>
            <Link to='/submit'>Submit</Link>
        </nav>
    )
}

export default Navbar;