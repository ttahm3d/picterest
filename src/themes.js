import { createGlobalStyle } from "styled-components";

export const light = {
  bg: "#fafafa",
  fg: "#313131",
};

export const dark = {
  bg: "#18191c",
  fg: "#ffffff",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.fg}
	}
`;
