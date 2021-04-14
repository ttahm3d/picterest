import styled from "styled-components";

export const ImageCont = styled.section`
  width: 90vw;
  margin: 70px auto;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
  justify-content: center;

  div {
    width: 90vw;
    max-width: 350px;
    img {
      max-width: 100%;
    }
  }
`;
