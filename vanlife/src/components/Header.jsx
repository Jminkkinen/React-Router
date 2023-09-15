import React from "react";
import { Link, NavLink } from "react-router-dom"
import loginImg from "../assets/images/avatar-icon.png"

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink 
                    to="/about"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink 
                    to="/vans"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Vans
                </NavLink>
                <NavLink 
                    to="/host"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Host
                </NavLink>
                <Link to="login" className="login-link">
                    <img 
                        src={loginImg}
                        className="login-icon"
                        alt="login icon"
                    />
                </Link>
            </nav>
        </header>
    )
};