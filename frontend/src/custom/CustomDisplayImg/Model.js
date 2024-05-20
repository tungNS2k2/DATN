import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    max-width: 80%;
    max-height: 80%;
    overflow: hidden;
    img {
        width: 100%;
        height: auto;
        max-width: 512px;
        max-height: 512px;
        object-fit: cover;
    }
`;

const Modal = ({ imageUrl, onClose }) => {
    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <img src={imageUrl} alt="Zoomed" />
            </ModalContent>
        </ModalOverlay>
    );
};

export default Modal;
