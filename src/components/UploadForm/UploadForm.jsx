import React, { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import { UploadFormWrapper } from "./UploadForm.styles";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const fileTypes = ["image/png", "image/jpeg", "image/jpg"];

  const changeHandler = (event) => {
    setFile(null);
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
        <label htmlFor="fileInput">
          <input type="file" id="fileInput" onChange={changeHandler} />
          <span>Upload File</span>
        </label>
        <div>
          {error && <div className="error">{error}</div>}
          {file && <div>uploading {file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </form>
    </UploadFormWrapper>
  );
};

export default UploadForm;
