import React from "react";
import useFirestore from "../../hooks/useFirestore";
import { ImageCont } from "./ImageContainer.styles";

const ImageContainer = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");
  return (
    <ImageCont>
      {docs.map((image) => (
        <div key={image.id} onClick={() => setSelectedImg(image.url)}>
          <img src={image.url} alt="uploaded img" />
        </div>
      ))}
    </ImageCont>
  );
};

export default ImageContainer;
