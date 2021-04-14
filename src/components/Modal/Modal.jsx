import React from "react";
import { StyledModal } from "./Modal.styles";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const closeModal = () => {
    setSelectedImg(null);
  };

  return (
    <StyledModal onClick={closeModal}>
      <img src={selectedImg} alt="enlargedimage" />
    </StyledModal>
  );
};

export default Modal;
