import React from 'react';
import './Header.css';

const Header = props => (
    <div className="header d-flex align-items-center justify-content-center">
        <div className="title">{props.children}</div>
        <p className="desc">This game is LITERALLY the best clicky game on the internet! ~ Chris Traeger</p>

    </div>
);

export default Header;