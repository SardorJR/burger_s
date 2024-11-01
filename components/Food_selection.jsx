"use client";
import React from 'react';

function Food_selections({ selctions, isActive, setSelectedCategory }) {
    const handleClick = () => {
        setSelectedCategory(selctions._id)
    }

    return (
        <div className={`item ${isActive ? 'active' : ''}`} onClick={handleClick}>
            {selctions.image && <img src={selctions.image} alt={selctions.name || 'No Name'} />}
            <span>{selctions.name || 'Unnamed'}</span>
        </div>
    )
}

export default Food_selections
