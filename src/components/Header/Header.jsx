import React from "react";
import { StyledHeader } from "./Header.styles";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = ({ toggle, theme }) => {
  return (
    <StyledHeader>
      <nav>
        <h1>Picterest</h1>
        <button onClick={toggle}>
          {theme === "lightTheme" ? (
            <FaMoon style={{ color: "#D5D8DC" }} />
          ) : (
            <FaSun style={{ color: "#f1c40f" }} />
          )}
        </button>
      </nav>
    </StyledHeader>
  );
};

export default Header;
