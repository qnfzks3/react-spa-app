import {Link} from "react-router-dom";
import React from "react";
import App from "../App";


const Menu=()=>{
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/event">Event</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}
export default Menu;