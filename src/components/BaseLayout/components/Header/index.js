import React from 'react'
import {NavLink} from 'react-router-dom'

import './index.css'

const Header =()=>(
    <div className="header">
        <h1 id="header-title">Toonda Store</h1>
        <div className="links-header">
        <p><NavLink activeClassName="selected" className="nav-link-header" to="/vegetables">Vegetables</NavLink></p>
        <p><NavLink activeClassName="selected" className="nav-link-header" to="/cereals">Cereals</NavLink></p>
        <p><NavLink activeClassName="selected" className="nav-link-header" to="/fruits">Fruits</NavLink></p>
        {/* <p><NavLink activeClassName="selected" className="nav-link-header" to="/accessories"></NavLink></p> */}

        </div>
        

    </div>

)

export default Header;