import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;

  img {
    width: 512px;
    height: auto;
  }

  .title {
    position: absolute;
    bottom: 20px;
    left: 20px;
    font-size: 18px;
    color: white;
    font-family: serif;
    background: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 5px;
  }
`;

const CustomModal = ({ imageUrl, imageTitle, onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} alt={imageTitle} />
        
      </ModalContent>
    </ModalOverlay>
  );
};

export default CustomModal;
