import styled from "@emotion/styled";
import NavBar from "@/components/UI/NavBar/NavBar";
import { theme } from "@/api/theme";
import { useContext } from "react";
import { AppContext } from "@/api/AppContext";

const Footer = () => {
  const { isMobile } = useContext(AppContext);

  return (
    <StyledFooter>
      <div className="footer-item">
        <p onClick={() => console.log(isMobile)}>webdread © 2023r.</p>
      </div>
      {!isMobile ? <NavBar className="nav-bar" /> : null}
      <div className="footer-item">
        <p>version 1.0</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  width: 100%;
  padding: 0 2rem;
  z-index: 1;
  @media (max-width: ${theme.breakpoints.md}) {
    position: absolute;
    bottom: 1.5rem;
  }
`;
