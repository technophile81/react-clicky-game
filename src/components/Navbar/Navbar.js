import React from "react";
import './Navbar.css';

const Navbar = props => (
    <div className="container-wrapper">
    
    <nav className="navbar navbar-expand-lg fixed-top d-flex justify-content-between bg-primary"><div className="container">
        <a className="navbar-brand" href="/">
            {props.children}
        </a>
        <div className="score">
            <span className="mr-2">Score: {props.score}</span>
            <span>High Score: {props.highScore}</span>
        </div></div>
    </nav>
    
    </div>
);

export default Navbar;
