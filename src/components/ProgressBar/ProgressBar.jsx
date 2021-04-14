import React, { useEffect } from "react";
import useStorage from "../../hooks/useStorage";
import { StyledProgressBar } from "./ProgressBar.styles";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <StyledProgressBar style={{ width: progress + "%" }}></StyledProgressBar>
  );
};

export default ProgressBar;
