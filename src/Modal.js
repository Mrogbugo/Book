import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 500px;
    width: 100%;
    text-align: center;
`;

const ModalHeader = styled.h2`
    margin-top: 0;
`;

const ModalBody = styled.p`
    margin: 15px 0;
`;

const Button = styled.button`
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;

    &:hover {
        background-color: #45a049;
    }
`;

const Modal = ({ message, onConfirm, onClose }) => (
    <ModalOverlay>
        <ModalContent>
            <ModalHeader>Confirm Deletion</ModalHeader>
            <ModalBody>{message}</ModalBody>
            <Button onClick={onConfirm}>Confirm</Button>
            <Button onClick={onClose}>Cancel</Button>
        </ModalContent>
    </ModalOverlay>
);

export default Modal;
