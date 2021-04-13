import React, { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import { UploadFormWrapper } from "./UploadForm.styles";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const fileTypes = ["image/png", "image/jpeg", "image/jpg"];

  const changeHandler = (event) => {
    let selectedFile = event.target.files[0];
    if (selectedFile && fileTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError("");
      console.log(selectedFile);
    } else {
      setFile(null);
      setError("Please select an image [png/jpeg/jpg]");
    }
  };

  return (
    <UploadFormWrapper>
      <form>
        <input type="file" name="" id="" onChange={changeHandler} />
        <div>
          {error && <div className="error">{error}</div>}
          {file && <div>{file.name}</div>}
          {file && <ProgressBar />}
        </div>
      </form>
    </UploadFormWrapper>
  );
};

export default UploadForm;
