import React from 'react'
import {Icon} from 'react-materialize'
import {NavLink} from 'react-router-dom'

import './index.css'

const Navbar=()=>(
    <nav className="navbar">
        <div className="nav-links">
            <ul>
                <li><NavLink activeClassName="selected" className="nav-link" exact to="/">Home</NavLink></li>
                <li><NavLink activeClassName="selected" className="nav-link" to="">About Us</NavLink></li>
                <li><NavLink activeClassName="selected" className="nav-link" to="">Contact Us</NavLink></li>
             </ul>
        </div>
    <div className="shopping-cart">
        <NavLink to="/cart"><Icon medium>shopping_cart</Icon></NavLink>

    </div>

    </nav>
);
export default Navbar;