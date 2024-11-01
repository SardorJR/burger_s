"use client"

import { useState } from "react";

const Modal_Dost = ({ children, Button }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <div onClick={openModal}>
                {Button}
            </div>

            {isModalOpen && (
                <div className="modal-overlay">
                    {/* <button className="modal-close" onClick={closeModal}>×</button> */}
                    
                    <div className="modal-body">
                    <div className="close" onClick={closeModal} >
                        <img src="/images/Group 6.png" alt="" />
                      </div>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal_Dost;