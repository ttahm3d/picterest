import React from "react";
import { StyledMain } from "./Main.styles";
import UploadFrom from "../UploadForm/UploadForm";

const Main = () => {
  return (
    <>
      <StyledMain>
        <h1>Picterest</h1>
        <p>A wannabe clone of Pinterest</p>
        <h3>Upload your images and check them on this site</h3>
      </StyledMain>
      <UploadFrom />
    </>
  );
};

export default Main;
