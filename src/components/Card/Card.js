import React from 'react';
import './Card.css';

const Card = props => (
    <div className="card-wrap" onClick={() => props.handleClicks(props.id)}>
        <div className="img-container">
            <img src={props.name} src={props.image} />
        </div>
    </div>
);

export default Card;