import React, { useState } from "react";
import { StyledMain } from "./Main.styles";
import UploadFrom from "../UploadForm/UploadForm";
import ImageContainer from "../ImageContainer/ImageContainer";
import Modal from "../Modal/Modal";

const Main = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <StyledMain>
        <h1>Picterest</h1>
        <p>A wannabe clone of Pinterest</p>
        <h3>Upload your images and check them on this site</h3>
      </StyledMain>
      <UploadFrom />
      <ImageContainer setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </>
  );
};

export default Main;
