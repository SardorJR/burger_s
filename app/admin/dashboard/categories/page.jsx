"use client";
import React, { useState } from 'react';
import Categorie_Form from '../Categorie_Form';

const Categories = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="conts">
            <button className='dobavit' onClick={openModal}>Add categories</button>
            <div className="top-container">
                
            </div>
            {isModalOpen && (
                <Categorie_Form onClose={closeModal} />
            )}
        </div>
    );
};

export default Categories;
