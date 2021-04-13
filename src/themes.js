import { createGlobalStyle } from "styled-components";

export const light = {
  bg: "#fff",
  fg: "#000",
};

export const dark = {
  bg: "#18191c",
  fg: "#fafafa",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.fg}
	}

  
`;
