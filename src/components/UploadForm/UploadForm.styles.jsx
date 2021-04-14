import styled from "styled-components";

export const UploadFormWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90vw;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;

  label input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    padding: 10px;
    border: 3px solid #e74c3c;
    border-radius: 20px;
  }

  span:hover {
    background-color: #e74c3c;
    color: #fff;
  }

  div {
    margin: 20px auto;
    max-width: 500px;
    width: 80vw;
  }

  .error {
    color: red;
    font-weight: bold;
  }
`;
