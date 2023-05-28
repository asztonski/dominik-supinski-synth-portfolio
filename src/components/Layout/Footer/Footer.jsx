import styled from "@emotion/styled";
import NavBar from "@/components/UI/NavBar/NavBar";
import { theme } from "@/api/theme";
import { useContext } from "react";
import { AppContext } from "@/api/AppContext";

const Footer = () => {
  const { isMobile } = useContext(AppContext);

  return (
    <StyledFooter>
      <FooterWrapper>
        <div className="footer-item">
          <p onClick={() => console.log(isMobile)}>webdread © 2023r.</p>
        </div>
        {!isMobile ? <NavBar className="nav-bar" /> : null}
        <div className="footer-item">
          <p>version 1.0</p>
        </div>
      </FooterWrapper>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  width: 100%;
  z-index: 10;
  padding: 0 2rem;
  @media (max-width: ${theme.breakpoints.md}) {
    background: black;
    bottom: 0;
    flex-shrink: 0;
    margin-top: 0.5rem;
    padding: 0;
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  width: 100%;
  z-index: 1;
  @media (max-width: ${theme.breakpoints.md}) {
    padding: 1rem;
  }
`;
